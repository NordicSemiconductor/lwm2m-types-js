/**
 * Robot PM
 *
 * This LWM2M Object includes PM(counter and gauge) supported by all robots.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10326.xml
 *
 * ID: 10326
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: true
 */
export type RobotPM_10326 = Readonly<{
	'51': BatteryLevel_51
	'300': BatteryTemperature_300
	'1101': DataTrafficUsed_1101
	'1507': TasksAssigned_1507
	'1508': SuccessfulTasksExecuted_1508
	'301'?: Temperature_301
	'302'?: Humidity_302
	'303'?: PM2_5_303
	'304'?: Smog_304
	'305'?: CO_305
	'306'?: CO2_306
	'307'?: PM10_307
	'601'?: Speed_601
	'602'?: WaterUsed_602
	'603'?: DustBoxUsed_603
	'604'?: ObstacleDistance_604
	'607'?: RobotTemperate_607
	'608'?: ConfidenceIndex_608
	'1102'?: ImagesHandled_1102
	'1103'?: HARIS_VoiceRequests_1103
	'1104'?: HARIS_VisionRequests_1104
	'1105'?: HARIS_MotionRequests_1105
	'1106'?: HARIS_MapRequests_1106
	'1107'?: SuccessfulHARIS_VoiceRequests_1107
	'1108'?: SuccessfulHARIS_VisionRequests_1108
	'1109'?: SuccessfulHARIS_MotionRequests_1109
	'1110'?: SuccessfulHARIS_MapRequests_1110
	'1111'?: QuestionsAnswered_1111
	'1112'?: UnknownQuestions_1112
	'1113'?: Mileage_1113
	'1114'?: CleanedTimes_1114
	'1115'?: CleanedArea_1115
	'1116'?: CleanedTime_1116
	'1117'?: ASRRecognized_1117
	'1118'?: IncorrectASRRecognitions_1118
	'1119'?: TriedTTSTexts_1119
	'1120'?: SuccessfulTTSTexts_1120
	'1121'?: ASRRecognized_CH_1121
	'1122'?: TriedTTSTexts_CH_1122
	'1123'?: SuccessfulTTSTexts_CH_1123
	'1124'?: ASRRecognized_EN_1124
	'1125'?: TriedTTSTexts_EN_1125
	'1126'?: SuccessfulTTSTexts_EN_1126
	'1127'?: ASRRecognized_ES_1127
	'1128'?: TriedTTSTexts_ES_1128
	'1129'?: SuccessfulTTSTexts_ES_1129
	'1130'?: ASRRecognized_JA_1130
	'1131'?: TriedTTSTexts_JA_1131
	'1132'?: SuccessfulTTSTexts_JA_1132
	'1133'?: ASRRecognized_SCCH_1133
	'1134'?: TriedTTSTexts_SCCH_1134
	'1135'?: SuccessfulTTSTexts_SCCH_1135
	'1136'?: ASRRecognized_GDCH_1136
	'1137'?: TriedTTSTexts_GDCH_1137
	'1138'?: SuccessfulTTSTexts_GDCH_1138
	'1139'?: ASRRecognized_TCH_1139
	'1140'?: TriedTTSTexts_TCH_1140
	'1141'?: SuccessfulTTSTexts_TCH_1141
	'1501'?: ObjectsRecognitionTries_1501
	'1502'?: SuccessfulObjectRecognition_1502
	'1503'?: FaceRecognitionTries_1503
	'1504'?: SuccessfulFaceRecognitions_1504
	'1505'?: VehiclePlateRecognitionTries_1505
	'1506'?: SuccessfulVehiclePlateRecognitions_1506
	'1509'?: ImagesUploaded_1509
	'1510'?: VideosUploaded_1510
	'1511'?: ImagesMatted_1511
}>
/**
 * Battery Level
 *
 * Referrence to a PM item, similar with Corelnk in LwM2M 1.1,
 * </object ID/object instance ID/resource ID>, for example: </10315/0/2>
 *
 * ID: 51
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type BatteryLevel_51 = number
/**
 * Battery Temperature
 *
 * Battery Temperature.
 *
 * ID: 300
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type BatteryTemperature_300 = number
/**
 * Data Traffic Used
 *
 * Data Traffic Used by the robot.
 *
 * ID: 1101
 * MultipleInstances: false
 * Mandatory: true
 * Units: Mbit/s
 */
type DataTrafficUsed_1101 = number
/**
 * Tasks Assigned
 *
 * Tasks number assigned to the robot.
 *
 * ID: 1507
 * MultipleInstances: false
 * Mandatory: true
 */
type TasksAssigned_1507 = number
/**
 * Successful Tasks Executed
 *
 * Tasks successfully executed by the robot.
 *
 * ID: 1508
 * MultipleInstances: false
 * Mandatory: true
 */
type SuccessfulTasksExecuted_1508 = number
/**
 * Temperature
 *
 * Environment Temperature.
 *
 * ID: 301
 * MultipleInstances: false
 * Mandatory: false
 * Units: Cel
 */
type Temperature_301 = number
/**
 * Humidity
 *
 * Environment Humidity.
 *
 * ID: 302
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Humidity_302 = number
/**
 * PM2.5
 *
 * PM2.5 of the environment.
 *
 * ID: 303
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type PM2_5_303 = number
/**
 * Smog
 *
 * Smoke concentration of the environment.
 *
 * ID: 304
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type Smog_304 = number
/**
 * CO
 *
 * CO concentration of the environment.
 *
 * ID: 305
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type CO_305 = number
/**
 * CO2
 *
 * CO2 concentration of the environment.
 *
 * ID: 306
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type CO2_306 = number
/**
 * PM10
 *
 * PM10 of the environment.
 *
 * ID: 307
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type PM10_307 = number
/**
 * Speed
 *
 * The speed of the robot.
 *
 * ID: 601
 * MultipleInstances: false
 * Mandatory: false
 * Units: m/h
 */
type Speed_601 = number
/**
 * Water Used
 *
 * The percentage of water used for CloudCleanX.
 *
 * ID: 602
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type WaterUsed_602 = number
/**
 * Dust Box Used
 *
 * The percentage of Dust Box Space used for CloudCleanX.
 *
 * ID: 603
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type DustBoxUsed_603 = number
/**
 * Obstacle Distance
 *
 * The distance between the robot and the obstacle.
 *
 * ID: 604
 * MultipleInstances: false
 * Mandatory: false
 * Units: cm
 */
type ObstacleDistance_604 = number
/**
 * Robot Temperate
 *
 * Robot surface temperature, for example: the RCU temperature.
 *
 * ID: 607
 * MultipleInstances: false
 * Mandatory: false
 * Units: Cel
 */
type RobotTemperate_607 = number
/**
 * Confidence Index
 *
 * The Confidence Index of the robot.
 *
 * ID: 608
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type ConfidenceIndex_608 = number
/**
 * Images Handled
 *
 * How many images have been handled by the robot.
 *
 * ID: 1102
 * MultipleInstances: false
 * Mandatory: false
 */
type ImagesHandled_1102 = number
/**
 * HARI S-Voice Requests
 *
 * HARI S-Voice Requests number by the robot.
 *
 * ID: 1103
 * MultipleInstances: false
 * Mandatory: false
 */
type HARIS_VoiceRequests_1103 = number
/**
 * HARI S-Vision Requests
 *
 * HARI S-Vision Requests number by the robot.
 *
 * ID: 1104
 * MultipleInstances: false
 * Mandatory: false
 */
type HARIS_VisionRequests_1104 = number
/**
 * HARI S-Motion Requests
 *
 * HARI S-Motion Requests number by the robot.
 *
 * ID: 1105
 * MultipleInstances: false
 * Mandatory: false
 */
type HARIS_MotionRequests_1105 = number
/**
 * HARI S-Map Requests
 *
 * HARI S-Map Requests number by the robot.
 *
 * ID: 1106
 * MultipleInstances: false
 * Mandatory: false
 */
type HARIS_MapRequests_1106 = number
/**
 * Successful HARI S-Voice Requests
 *
 * Successful HARI S-Voice Requests number by the robot.
 *
 * ID: 1107
 * MultipleInstances: false
 * Mandatory: false
 */
type SuccessfulHARIS_VoiceRequests_1107 = number
/**
 * Successful HARI S-Vision Requests
 *
 * Successful HARI S-Vision Requests number by the robot.
 *
 * ID: 1108
 * MultipleInstances: false
 * Mandatory: false
 */
type SuccessfulHARIS_VisionRequests_1108 = number
/**
 * Successful HARI S-Motion Requests
 *
 * Successful HARI S-Motion Requests number by the robot.
 *
 * ID: 1109
 * MultipleInstances: false
 * Mandatory: false
 */
type SuccessfulHARIS_MotionRequests_1109 = number
/**
 * Successful HARI S-Map Requests
 *
 * Successful HARI S-Map Requests number by the robot.
 *
 * ID: 1110
 * MultipleInstances: false
 * Mandatory: false
 */
type SuccessfulHARIS_MapRequests_1110 = number
/**
 * Questions Answered
 *
 * How many questions have been answered by the robot.
 *
 * ID: 1111
 * MultipleInstances: false
 * Mandatory: false
 */
type QuestionsAnswered_1111 = number
/**
 * Unknown Questions
 *
 * How many questions can't be answered by the robot.
 *
 * ID: 1112
 * MultipleInstances: false
 * Mandatory: false
 */
type UnknownQuestions_1112 = number
/**
 * Mileage
 *
 * How long has the robot gone, for CloudCleanX and CloudPatrol.
 *
 * ID: 1113
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Mileage_1113 = number
/**
 * Cleaned Times
 *
 * Cleaned Times by the robot, for CloudCleanX.
 *
 * ID: 1114
 * MultipleInstances: false
 * Mandatory: false
 */
type CleanedTimes_1114 = number
/**
 * Cleaned Area
 *
 * Space cleaned by the robot, for CloudCleanX.
 *
 * ID: 1115
 * MultipleInstances: false
 * Mandatory: false
 * Units: m2
 */
type CleanedArea_1115 = number
/**
 * Cleaned Time
 *
 * How long has the robot cleaned, for CloudCleanX.
 *
 * ID: 1116
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type CleanedTime_1116 = number
/**
 * ASR Recognized
 *
 * How many bytes of ASRs have been recognized by the robot.
 *
 * ID: 1117
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type ASRRecognized_1117 = number
/**
 * Incorrect ASR Recognitions
 *
 * How many bytes of ASRs have been recognized incorrectly by the robot.
 *
 * ID: 1118
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type IncorrectASRRecognitions_1118 = number
/**
 * Tried TTS Texts
 *
 * Tried TTS Texts number in bytes.
 *
 * ID: 1119
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type TriedTTSTexts_1119 = number
/**
 * Successful TTS Texts
 *
 * Successful TTS Texts number in bytes.
 *
 * ID: 1120
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type SuccessfulTTSTexts_1120 = number
/**
 * ASR Recognized (CH)
 *
 * How many bytes of (CH) ASRs have been recognized by the robot.
 *
 * ID: 1121
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type ASRRecognized_CH_1121 = number
/**
 * Tried TTS Texts (CH)
 *
 * Tried (CH) TTS Texts number in bytes.
 *
 * ID: 1122
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type TriedTTSTexts_CH_1122 = number
/**
 * Successful TTS Texts (CH)
 *
 * Successful (CH) TTS Texts number in bytes.
 *
 * ID: 1123
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type SuccessfulTTSTexts_CH_1123 = number
/**
 * ASR Recognized (EN)
 *
 * How many bytes of (EN) ASRs have been recognized by the robot.
 *
 * ID: 1124
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type ASRRecognized_EN_1124 = number
/**
 * Tried TTS Texts (EN)
 *
 * Tried (EN) TTS Texts number in bytes.
 *
 * ID: 1125
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type TriedTTSTexts_EN_1125 = number
/**
 * Successful TTS Texts (EN)
 *
 * Successful (EN) TTS Texts number in bytes.
 *
 * ID: 1126
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type SuccessfulTTSTexts_EN_1126 = number
/**
 * ASR Recognized (ES)
 *
 * How many bytes of (ES) ASRs have been recognized by the robot.
 *
 * ID: 1127
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type ASRRecognized_ES_1127 = number
/**
 * Tried TTS Texts (ES)
 *
 * Tried (ES) TTS Texts number in bytes.
 *
 * ID: 1128
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type TriedTTSTexts_ES_1128 = number
/**
 * Successful TTS Texts (ES)
 *
 * Successful(ES) TTS Texts number in bytes.
 *
 * ID: 1129
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type SuccessfulTTSTexts_ES_1129 = number
/**
 * ASR Recognized (JA)
 *
 * How many bytes of (JA) ASRs have been recognized by the robot.
 *
 * ID: 1130
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type ASRRecognized_JA_1130 = number
/**
 * Tried TTS Texts (JA)
 *
 * Tried (JA) TTS Texts number in bytes.
 *
 * ID: 1131
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type TriedTTSTexts_JA_1131 = number
/**
 * Successful TTS Texts (JA)
 *
 * Successful (JA) TTS Texts number in bytes.
 *
 * ID: 1132
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type SuccessfulTTSTexts_JA_1132 = number
/**
 * ASR Recognized (SCCH)
 *
 * How many bytes of (SCCH) ASRs have been recognized by the robot.
 *
 * ID: 1133
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type ASRRecognized_SCCH_1133 = number
/**
 * Tried TTS Texts (SCCH)
 *
 * Tried (SCCH) TTS Texts number in bytes.
 *
 * ID: 1134
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type TriedTTSTexts_SCCH_1134 = number
/**
 * Successful TTS Texts (SCCH)
 *
 * Successful (SCCH) TTS Texts number in bytes.
 *
 * ID: 1135
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type SuccessfulTTSTexts_SCCH_1135 = number
/**
 * ASR Recognized (GDCH)
 *
 * How many bytes of (GDCH) ASRs have been recognized by the robot.
 *
 * ID: 1136
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type ASRRecognized_GDCH_1136 = number
/**
 * Tried TTS Texts (GDCH)
 *
 * Tried (GDCH) TTS Texts number in bytes.
 *
 * ID: 1137
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type TriedTTSTexts_GDCH_1137 = number
/**
 * Successful TTS Texts (GDCH)
 *
 * Successful (GDCH) TTS Texts number in bytes.
 *
 * ID: 1138
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type SuccessfulTTSTexts_GDCH_1138 = number
/**
 * ASR Recognized (TCH)
 *
 * How many bytes of (TCH) ASRs have been recognized by the robot.
 *
 * ID: 1139
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type ASRRecognized_TCH_1139 = number
/**
 * Tried TTS Texts (TCH)
 *
 * Tried (TCH)TTS Texts number in bytes.
 *
 * ID: 1140
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type TriedTTSTexts_TCH_1140 = number
/**
 * Successful TTS Texts (TCH)
 *
 * Successful (TCH) TTS Texts number in bytes.
 *
 * ID: 1141
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type SuccessfulTTSTexts_TCH_1141 = number
/**
 * Objects Recognition Tries
 *
 * Objects Recognition Tries by the robot.
 *
 * ID: 1501
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjectsRecognitionTries_1501 = number
/**
 * Successful Object Recognition
 *
 * Successful Objects Recognition Tries by the robot.
 *
 * ID: 1502
 * MultipleInstances: false
 * Mandatory: false
 */
type SuccessfulObjectRecognition_1502 = number
/**
 * Face Recognition Tries
 *
 * Face Recognition Tries by the robot.
 *
 * ID: 1503
 * MultipleInstances: false
 * Mandatory: false
 */
type FaceRecognitionTries_1503 = number
/**
 * Successful Face Recognitions
 *
 * Successful Face Recognition Tries by the robot.
 *
 * ID: 1504
 * MultipleInstances: false
 * Mandatory: false
 */
type SuccessfulFaceRecognitions_1504 = number
/**
 * Vehicle Plate Recognition Tries
 *
 * Vehicle Plate Recognition Tries by the robot.
 *
 * ID: 1505
 * MultipleInstances: false
 * Mandatory: false
 */
type VehiclePlateRecognitionTries_1505 = number
/**
 * Successful Vehicle Plate Recognitions
 *
 * Successful Vehicle Plate Recognitions by the robot.
 *
 * ID: 1506
 * MultipleInstances: false
 * Mandatory: false
 */
type SuccessfulVehiclePlateRecognitions_1506 = number
/**
 * Images Uploaded
 *
 * Images Uploaded by the robot.
 *
 * ID: 1509
 * MultipleInstances: false
 * Mandatory: false
 */
type ImagesUploaded_1509 = number
/**
 * Videos Uploaded
 *
 * Videos Uploaded by the robot.
 *
 * ID: 1510
 * MultipleInstances: false
 * Mandatory: false
 */
type VideosUploaded_1510 = number
/**
 * Images Matted
 *
 * Images Matted by the robot.
 *
 * ID: 1511
 * MultipleInstances: false
 * Mandatory: false
 */
type ImagesMatted_1511 = number
/**
 * The objectURN for Robot PM
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10326'
