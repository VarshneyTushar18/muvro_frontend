"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

let turnstileScriptPromise = null;

function loadTurnstileScript() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.turnstile) return Promise.resolve(window.turnstile);

  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector(
        'script[src*="challenges.cloudflare.com/turnstile"]'
      );
      if (existing) {
        if (window.turnstile) {
          resolve(window.turnstile);
          return;
        }
        existing.addEventListener("load", () => resolve(window.turnstile));
        existing.addEventListener("error", reject);
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.turnstile) {
          resolve(window.turnstile);
        } else {
          const interval = setInterval(() => {
            if (window.turnstile) {
              clearInterval(interval);
              resolve(window.turnstile);
            }
          }, 50);
          setTimeout(() => {
            clearInterval(interval);
            resolve(window.turnstile || null);
          }, 4000);
        }
      };
      script.onerror = (err) => reject(err);
      document.head.appendChild(script);
    });
  }

  return turnstileScriptPromise;
}

const TurnstileWidget = forwardRef(function TurnstileWidget(
  {
    onVerify,
    onExpire,
    onError,
    theme = "auto",
    size = "normal",
    className = "",
  },
  ref
) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const callbacksRef = useRef({ onVerify, onExpire, onError });
  callbacksRef.current = { onVerify, onExpire, onError };

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current && typeof window !== "undefined" && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current);
        } catch (e) {
          console.warn("Turnstile reset error:", e);
        }
      }
    },
  }));

  useEffect(() => {
    let isMounted = true;

    if (!siteKey) {
      console.warn("NEXT_PUBLIC_TURNSTILE_SITE_KEY is not configured.");
      return;
    }

    loadTurnstileScript()
      .then((turnstile) => {
        if (!isMounted || !containerRef.current || !turnstile) return;

        if (widgetIdRef.current) {
          try {
            turnstile.remove(widgetIdRef.current);
          } catch {
            // Widget might already be detached
          }
          widgetIdRef.current = null;
        }

        try {
          widgetIdRef.current = turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token) => {
              if (isMounted && callbacksRef.current.onVerify) {
                callbacksRef.current.onVerify(token);
              }
            },
            "expired-callback": () => {
              if (isMounted && callbacksRef.current.onExpire) {
                callbacksRef.current.onExpire();
              }
            },
            "error-callback": (err) => {
              if (isMounted && callbacksRef.current.onError) {
                callbacksRef.current.onError(err);
              }
            },
            theme,
            size,
          });
        } catch (renderErr) {
          console.warn("Turnstile render error:", renderErr);
        }
      })
      .catch((err) => {
        console.error("Failed to load Turnstile script:", err);
      });

    return () => {
      isMounted = false;
      if (widgetIdRef.current && typeof window !== "undefined" && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignore cleanup error on unmount
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, theme, size]);

  if (!siteKey) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minHeight: size === "compact" ? 120 : 65 }}
    />
  );
});

export default TurnstileWidget;
