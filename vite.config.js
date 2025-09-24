import { reactRouter } from "@react-router/dev/vite";
import {
  sentryReactRouter,
  type SentryReactRouterBuildOptions,
} from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

const sentryConfig = {
  org: "leksaiueo-dev",
  project: "travel-agency",
  authToken:
    "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",
};

export default defineConfig((config) => {
  return {
    plugins: [
      tailwindcss(),
      reactRouter(),
      sentryReactRouter(sentryConfig, config),
    ],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/],
    },
    // Pastikan environment variables tersedia saat build
    define: {
      "process.env.GEMINI_API_KEY": JSON.stringify(process.env.GEMINI_API_KEY),
      "process.env.UNSPLASH_ACCESS_KEY": JSON.stringify(
        process.env.UNSPLASH_ACCESS_KEY
      ),
    },
  };
});
