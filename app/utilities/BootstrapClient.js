/*
  Project: Muvro
  Module: Bootstrap Client
  Scope: Global Bootstrap JS

  Author: Tech2Globe Web Solutions
  Creation Date: 2025-AUG-29
  Last Modified Date: 2025-AUG-29
  Version: 1.0
*/
"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
