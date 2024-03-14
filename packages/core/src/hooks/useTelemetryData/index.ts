import { useContext } from "react";

import { AuditLogContext } from "@contexts/auditLog";
import { LiveContext } from "@contexts/live";
import { LegacyRouterContext } from "@contexts/router/legacy";
import { DataContext } from "@contexts/data";
import { I18nContext } from "@contexts/i18n";
import { NotificationContext } from "@contexts/notification";
import { AccessControlContext } from "@contexts/accessControl";
import { useResource } from "@hooks/resource";

import { ITelemetryData } from "../../components/telemetry/types";
import { useIsExistAuthentication, useRefineContext } from "..";

// It reads and updates from package.json during build. ref: tsup.config.ts
const REFINE_VERSION = "1.0.0";

export const useTelemetryData = (): ITelemetryData => {
  const auth = useIsExistAuthentication();
  const auditLogContext = useContext(AuditLogContext);
  const { liveProvider } = useContext(LiveContext);
  const routerContext = useContext(LegacyRouterContext);
  const dataContext = useContext(DataContext);
  const { i18nProvider } = useContext(I18nContext);
  const notificationContext = useContext(NotificationContext);
  const accessControlContext = useContext(AccessControlContext);
  const { resources } = useResource();
  const refineOptions = useRefineContext();

  const auditLog =
    !!auditLogContext.create ||
    !!auditLogContext.get ||
    !!auditLogContext.update;

  const live =
    !!liveProvider?.publish ||
    !!liveProvider?.subscribe ||
    !!liveProvider?.unsubscribe;

  const router =
    !!routerContext.useHistory ||
    !!routerContext.Link ||
    !!routerContext.Prompt ||
    !!routerContext.useLocation ||
    !!routerContext.useParams;

  const data = !!dataContext;

  const i18n =
    !!i18nProvider?.changeLocale ||
    !!i18nProvider?.getLocale ||
    !!i18nProvider?.translate;

  const notification =
    !!notificationContext.close || !!notificationContext.open;

  const accessControl = !!accessControlContext.can;

  const projectId = refineOptions?.options?.projectId;

  return {
    providers: {
      auth,
      auditLog,
      live,
      router,
      data,
      i18n,
      notification,
      accessControl,
    },
    version: REFINE_VERSION,
    resourceCount: resources.length,
    projectId,
  };
};
