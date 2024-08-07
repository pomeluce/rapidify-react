export enum RouteName {
  /* module */
  MODULE_ADMIN = 'module.admin',
  MODULE_SYSTEM = 'module.system',
  MODULE_WORKFLOW = 'module.workflow',
  MODULE_RESULT = 'module.result',
  MODULE_ERROR = 'module.error',

  /* front */
  HOME = 'home',
  COMPONENTS = 'components',

  /* auth */
  LOGIN = 'login',
  REGISTER = 'register',

  /* admin */
  ADMIN = 'admin',
  WORKBENCH = 'workbench',

  /* system */
  SYSTEM_USER = 'system.user',
  SYSTEM_ROLE = 'system.role',
  SYSTEM_PERMISSION = 'system.permission',
  SYSTEM_MENU = 'system.menu',

  /* workflow */
  WORKFLOW_DEFINE = 'workflow.define',
  WORKFLOW_DESIGN = 'workflow.design',

  /* error */
  ERROR_403 = 'error.403',
  ERROR_404 = 'error.404',
  ERROR_500 = 'error.500',

  UNKNOWN = 'unknown',
}
