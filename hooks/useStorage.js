import React from "react";
import * as SecureStore from "expo-secure-store";

function useStorage() {
  // Get a key
  const get = async (key) => {
    const value = await SecureStore.getItemAsync(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  };
  // Set a key
  const set = async (key, value) => {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }

    await SecureStore.setItemAsync(key, value);
  };
  // Remove a key
  const del = async (key) => {
    await SecureStore.deleteItemAsync(key);
  };
  // Clear all keys
  const clr = async () => {
    await SecureStore.deleteItemAsync();
  };

  // Get storage size in bytes
  const getStorageSize = async () => {
    const keys = await SecureStore.getAllKeysAsync();
    let size = 0;
    for (const key of keys) {
      const value = await SecureStore.getItemAsync(key);
      size += value.length;
    }
    // returns size in bytes
    return size;
  };

  return {
    get,
    set,
    del,
    clr,
    getStorageSize,
  };
}

export default useStorage;
