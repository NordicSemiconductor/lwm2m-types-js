import { LwM2M } from "./LWM2M";

const _1: LwM2M.Object_1.LwM2M_Server = {
  Name: "LwM2M Server",
  ObjectURN: "urn:oma:lwm2m:oma:1:1.2",
  LWM2MVersion: 1.1,
  ObjectVersion: 1.1,
  Resources: {
    _0: 101,
    _1: 43200,
    _2: 0,
    _3: 0,
    _5: 86400,
    _6: false,
    _7: "U",
    _23: false,
    _8: null,
  },
};

const _3: LwM2M.Object_3.Device = {
  Name: "Device",
  ObjectURN: "urn:oma:lwm2m:oma:3:1.2",
  LWM2MVersion: 1.1,
  ObjectVersion: 1.1,
  Resources: {
    _0: "Nordic Semiconductor ASA",
    _1: "thingy91_nrf9160",
    _2: "351358815340515",
    _3: "0.0.0-development",
    _7: 4113,
    _11: 0,
    _13: "2022/10/07, 13:33:53 UTC+0",
    _16: "U",
    _18: "nRF9160_SICA",
    _19: "mfw_nrf9160_1.3.2",
    _4: null,
  },
};

const _4: LwM2M.Object_4.Connectivity_Monitoring = {
  Name: "Device",
  ObjectURN: "urn:oma:lwm2m:oma:3:1.2",
  LWM2MVersion: 1.1,
  ObjectVersion: 1.1,
  Resources: {
    _0: 6,
    _1: 6,
    _2: -96,
    _3: 0,
    _4: "10.160.225.39",
    _7: "ibasis.iot",
    _8: 21627653,
    _9: 1,
    _10: 242,
    _11: 0,
    _12: 30401,
  },
};

const _5: LwM2M.Object_5.Firmware_Update = {
  Name: "Firmware Update",
  ObjectURN: "urn:oma:lwm2m:oma:5:1.1",
  LWM2MVersion: 1.1,
  ObjectVersion: 1.1,
  Resources: {
    _0: null,
    _1: "",
    _2: null,
    _3: 0,
    _5: 1,
    _9: 2,
  },
};

const _6: LwM2M.Object_6.Location = {
  Name: "Location",
  ObjectURN: "urn:oma:lwm2m:oma:6",
  LWM2MVersion: 1.1,
  ObjectVersion: 1.1,
  Resources: {
    _0: 0,
    _1: 0,
    _2: 0,
    _3: 0,
    _5: "1970/01/01, 0:00:00 UTC+0",
    _6: 0,
  },
};

const _3303: LwM2M.Object_3303.Temperature = {
  Name: "Location",
  ObjectURN: "urn:oma:lwm2m:ext:3303:1.1",
  LWM2MVersion: 1.0,
  ObjectVersion: 1.1,
  Resources: {
    _5518: "2022/10/07, 13:33:22 UTC+0",
    _5601: 23.51,
    _5602: 23.51,
    _5603: -40,
    _5604: 85,
    _5700: 24.57,
    _5701: "Celsius degrees",
  },
};

const _3304: LwM2M.Object_3304.Humidity = {
  Name: "Humidity",
  ObjectURN: "urn:oma:lwm2m:ext:3304:1.1",
  LWM2MVersion: 1.0,
  ObjectVersion: 1.1,
  Resources: {
    _5518: "2022/10/07, 13:33:22 UTC+0",
    _5601: 31.06,
    _5602: 31.06,
    _5603: 0,
    _5604: 100,
    _5700: 28.93,
    _5701: "%",
  },
};

const _3323: LwM2M.Object_3323.Pressure = {
  Name: "Pressure",
  ObjectURN: "urn:oma:lwm2m:ext:3323:1.1",
  LWM2MVersion: 1.0,
  ObjectVersion: 1.1,
  Resources: {
    _5518: "2022/10/07, 13:33:22 UTC+0",
    _5601: 98.24,
    _5602: 98.24,
    _5603: 30,
    _5604: 110,
    _5700: 98.23,
    _5701: "kPa",
  },
};

const _3347: LwM2M.Object_3347.Push_button = {
  Name: "Pressure",
  ObjectURN: "urn:oma:lwm2m:ext:3323:1.1",
  LWM2MVersion: 1.0,
  ObjectVersion: 1.1,
  Resources: {
    _5500: false,
    _5501: 0,
    _5518: "1970/01/01, 0:00:00 UTC+0",
    _5750: "Push button 1",
  },
};

const _10256: LwM2M.Object_10256.ECID_Signal_Measurement_Information = {
  Name: "Pressure",
  ObjectURN: "urn:oma:lwm2m:ext:3323:1.1",
  LWM2MVersion: 1.0,
  ObjectVersion: 1.1,
  Resources: {
    _0: 247,
    _1: 0,
    _2: 6400,
    _3: -96,
    _4: -12,
    _5: 0,
  },
};

export const knowGoodShadow = {
  _1,
  _3,
  _4,
  _5,
  _6,
  _3303,
  _3304,
  _3323,
  _3347,
  _10256,
};
