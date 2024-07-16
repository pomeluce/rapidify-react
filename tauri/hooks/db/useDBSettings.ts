import { Sqlite } from '@tauri/plugins';

const settings = new Sqlite('settings', 'create table if not exists settings (key varchar(255) primary key, type varchar(255), value text)');

export default () => {
  const queryByKey = async (key: string, defaultValue?: string) => {
    const db = await settings.db();

    try {
      const result = await db.select<DBSettings[]>(`select * from ${settings.tableName} where key = $1`, [key]);
      return result.length > 0 ? result[0].value : defaultValue;
    } catch (e) {
      console.error('error query settings value for key: ', e);
      throw e;
    }
  };

  const queryByType = async (type: string) => {
    const db = await settings.db();

    try {
      return await db.select<DBSettings[]>(`select * from ${settings.tableName} where type = $1`, [type]);
    } catch (e) {
      console.error('error query settings value for type: ', e);
      throw e;
    }
  };

  const queryAll = async () => {
    const db = await settings.db();
    try {
      return await db.select<DBSettings[]>(`select * from ${settings.tableName}`);
    } catch (e) {
      console.error('error query settings value: ', e);
      throw e;
    }
  };

  const addOrUpdate = async (key: string, type: string, value: string) => {
    const db = await settings.db();
    try {
      await db.execute(`replace into ${settings.tableName} (key, type, value) values($1, $2, $3)`, [key, type, value]);
    } catch (e) {
      console.error('error add settings value: ', e);
      throw e;
    }
  };

  const deleteByKey = async (key: string) => {
    const db = await settings.db();
    try {
      await db.execute(`delete from ${settings.tableName} where key = $1`, [key]);
    } catch (e) {
      console.error('error delete settings value: ', e);
      throw e;
    }
  };

  return { queryByKey, queryByType, queryAll, addOrUpdate, deleteByKey };
};
