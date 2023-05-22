import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  // logo: <span>My Project</span>,
  logo: (
    <span
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}
    >
      <img src="/logo.png" height="40px" width="40px" />
      &nbsp; EnvStore
    </span>
  ),
  project: {
    link: "https://github.com/env-store/envs",
  },
  chat: {
    link: "https://discord.gg/VyUGazafyx",
  },
  docsRepositoryBase: "https://github.com/env-store/docs",
  footer: {
    text: (
      <span>
        <style>
          {`
            .footerlink {
              color: #fff;
              text-decoration: none;
            }
            .footerlink:hover {
              color: #fff;
              text-decoration: underline;
            }
          `}
        </style>
        MIT 2023 © EnvStore | EnvStore documentation and project is licensed
        under the{" "}
        <a
          target="_blank"
          className="footerlink"
          href="https://github.com/env-store/docs/blob/main/LICENSE"
        >
          MIT License
        </a>
        .
      </span>
    ),
  },
};

export default config;
