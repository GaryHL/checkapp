import React, { createContext, useState } from "react";
import dataJson from "../data/dataApps.json";

const AppContext = createContext();

const initialData = dataJson.data.apps;
const initialSettings = {
  busqueda: ``,
  web: false,
  ios: false,
  android: false,
  productivity: false,
  lifeStyle: false,
  social: false,
  photography: false,
  tools: false,
  entertainment: false,
  videoEditor: false,
};

// función para filtrar los objetos que no son "true"
Object.filter = function (mainObject, filterFunction) {
  return Object.keys(mainObject)
    .filter(function (ObjectKey) {
      return filterFunction(mainObject[ObjectKey]);
    })
    .reduce(function (result, ObjectKey) {
      result[ObjectKey] = mainObject[ObjectKey];
      return result;
    }, {});
};

export const AppProvider = ({ children }) => {
  const [jsonApp, setJsonApp] = useState(initialData);
  const [settingsFilter, setSettingsFilter] = useState(initialSettings);

  // super filtro

  function filtro(objectSettings) {
    let result = objectSettings;

    let activeSettings = Object.filter(settingsFilter, function (setting) {
      return setting == true;
    });
    console.log("configuración activada", activeSettings);

    console.log("settings in function", settingsFilter);
    if (settingsFilter.productivity === true) {
      result = objectSettings.filter((a) => a.app_category === "Productivity");
    }
    if (settingsFilter.entertainment === true) {
      result = objectSettings.filter((a) => a.app_category === "Entertainment");
    }
    if (settingsFilter.social === true) {
      result = objectSettings.filter((a) => a.app_category === "Social");
    }
    if (settingsFilter.photography === true) {
      result = objectSettings.filter((a) => a.app_category === "Photography");
    }
    if (settingsFilter.lifeStyle === true) {
      result = objectSettings.filter((a) => a.app_category === "Lifestyle");
    }
    if (settingsFilter.tools === true) {
      result = objectSettings.filter((a) => a.app_category === "Tools");
    }
    if (settingsFilter.videoEditor === true) {
      result = objectSettings.filter(
        (a) => a.app_category === "Video Players & editors"
      );
    }

    return result;
  }


  const [SingleApp, setSingleApp] = useState();





  const data = { jsonApp, setSettingsFilter, settingsFilter, filtro, SingleApp, setSingleApp };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;
