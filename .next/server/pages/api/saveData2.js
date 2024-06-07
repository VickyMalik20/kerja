"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/saveData2";
exports.ids = ["pages/api/saveData2"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("date-fns");;

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeDbConnection\": () => (/* binding */ closeDbConnection),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: process.env.MYSQL_HOST,\n        database: process.env.MYSQL_DATABASE,\n        user: process.env.MYSQL_USERNAME,\n        password: process.env.MYSQL_PASSWORD,\n        port: parseInt(process.env.MYSQL_PORT) // Tidak perlu melakukan parseInt jika sudah dalam format yang benar\n    }\n});\n// Fungsi untuk menutup koneksi\nconst closeDbConnection = async ()=>{\n    await db.end();\n};\nasync function handler(req, res) {\n    try {\n        const results = await db.query(\"SELECT * FROM your_table\"); // Ganti dengan query yang sesuai\n        res.status(200).json(results);\n    } catch (error) {\n        console.error(\"Error executing database query:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFOUIsTUFBTUMsS0FBS0QsdURBQUtBLENBQUM7SUFDcEJFLFFBQVE7UUFDSkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBQzVCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLGNBQWM7UUFDcENDLE1BQU1MLFFBQVFDLEdBQUcsQ0FBQ0ssY0FBYztRQUNoQ0MsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxjQUFjO1FBQ3BDQyxNQUFNQyxTQUFTVixRQUFRQyxHQUFHLENBQUNVLFVBQVUsRUFBRSxvRUFBb0U7SUFDL0c7QUFDSixHQUFHO0FBRUgsK0JBQStCO0FBQ3hCLE1BQU1DLG9CQUFvQixVQUFZO0lBQ3pDLE1BQU1mLEdBQUdnQixHQUFHO0FBQ2hCLEVBQUU7QUFFYSxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJO1FBQ0EsTUFBTUMsVUFBVSxNQUFNcEIsR0FBR3FCLEtBQUssQ0FBQyw2QkFBNkIsaUNBQWlDO1FBQzdGRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtJQUN6QixFQUFFLE9BQU9JLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDakRMLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QjtJQUMxRDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZvcm1hc2ltYXNqaWQvLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSBcInNlcnZlcmxlc3MtbXlzcWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkYiA9IG15c3FsKHtcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1ZU1FMX0hPU1QsXHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1ZU1FMX0RBVEFCQVNFLFxyXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1ZU1FMX1VTRVJOQU1FLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCxcclxuICAgICAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5NWVNRTF9QT1JUKSAvLyBUaWRhayBwZXJsdSBtZWxha3VrYW4gcGFyc2VJbnQgamlrYSBzdWRhaCBkYWxhbSBmb3JtYXQgeWFuZyBiZW5hclxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIEZ1bmdzaSB1bnR1ayBtZW51dHVwIGtvbmVrc2lcclxuZXhwb3J0IGNvbnN0IGNsb3NlRGJDb25uZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZGIuZW5kKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeSgnU0VMRUNUICogRlJPTSB5b3VyX3RhYmxlJyk7IC8vIEdhbnRpIGRlbmdhbiBxdWVyeSB5YW5nIHNlc3VhaVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleGVjdXRpbmcgZGF0YWJhc2UgcXVlcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsImRiIiwiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNWVNRTF9IT1NUIiwiZGF0YWJhc2UiLCJNWVNRTF9EQVRBQkFTRSIsInVzZXIiLCJNWVNRTF9VU0VSTkFNRSIsInBhc3N3b3JkIiwiTVlTUUxfUEFTU1dPUkQiLCJwb3J0IiwicGFyc2VJbnQiLCJNWVNRTF9QT1JUIiwiY2xvc2VEYkNvbm5lY3Rpb24iLCJlbmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzdWx0cyIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/saveData2.js":
/*!********************************!*\
  !*** ./pages/api/saveData2.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([date_fns__WEBPACK_IMPORTED_MODULE_1__]);\ndate_fns__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n // Import fungsi parse dan format dari date-fns\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const { shift1 , shift2 , shift3 , tanggal , machine_name  } = req.body;\n        const parsedTanggal = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parse)(tanggal, \"dd/MM/yyyy\", new Date());\n        const formattedTanggal = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(parsedTanggal, \"yyyy-MM-dd\"); // Memformat tanggal sesuai dengan format yang diharapkan oleh MySQL\n        // Lakukan operasi penyimpanan data ke database\n        const sql = `INSERT INTO mtbf_mttr_results_2 \r\n                 (tanggal, machine_name, \r\n                  shift1_failures, shift1_downtime, shift1_mtbf, shift1_mttr, \r\n                  shift2_failures, shift2_downtime, shift2_mtbf, shift2_mttr, \r\n                  shift3_failures, shift3_downtime, shift3_mtbf, shift3_mttr, \r\n                  total_failures, total_downtime, total_mtbf, total_mttr) \r\n                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;\n        const values = [\n            formattedTanggal,\n            machine_name,\n            shift1.failures,\n            shift1.downtime,\n            shift1.mtbf,\n            shift1.mttr,\n            shift2.failures,\n            shift2.downtime,\n            shift2.mtbf,\n            shift2.mttr,\n            shift3.failures,\n            shift3.downtime,\n            shift3.mtbf,\n            shift3.mttr,\n            shift1.failures + shift2.failures + shift3.failures,\n            shift1.downtime + shift2.downtime + shift3.downtime,\n            (1440 / (shift1.failures + shift2.failures + shift3.failures)).toFixed(2),\n            ((shift1.downtime + shift2.downtime + shift3.downtime) / (shift1.failures + shift2.failures + shift3.failures)).toFixed(2)\n        ];\n        _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.query(sql, values, (error, results)=>{\n            if (error) {\n                console.error(\"Error saving data to database:\", error);\n                res.status(500).json({\n                    message: \"Internal Server Error\"\n                });\n            } else {\n                console.log(\"Data saved successfully:\", results);\n                res.status(200).json({\n                    message: \"Data saved successfully\"\n                });\n            }\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZURhdGEyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUNPLENBQUMsK0NBQStDO0FBRzFFLFNBQVNHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3ZCLE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxPQUFNLEVBQUVDLE9BQU0sRUFBRUMsUUFBTyxFQUFFQyxhQUFZLEVBQUUsR0FBR1AsSUFBSVEsSUFBSTtRQUNsRSxNQUFNQyxnQkFBZ0JaLCtDQUFLQSxDQUFDUyxTQUFTLGNBQWMsSUFBSUk7UUFDdkQsTUFBTUMsbUJBQW1CYixnREFBTUEsQ0FBQ1csZUFBZSxlQUFlLG9FQUFvRTtRQUVsSSwrQ0FBK0M7UUFDL0MsTUFBTUcsTUFBTSxDQUFDO1FBUWIsTUFBTUMsU0FBUztZQUNYRjtZQUNBSjtZQUNBSixPQUFPVyxRQUFRO1lBQUVYLE9BQU9ZLFFBQVE7WUFBRVosT0FBT2EsSUFBSTtZQUFFYixPQUFPYyxJQUFJO1lBQzFEYixPQUFPVSxRQUFRO1lBQUVWLE9BQU9XO1lBQVVYLE9BQU9ZLElBQUk7WUFBRVosT0FBT2EsSUFBSTtZQUMxRFosT0FBT1M7WUFBVVQsT0FBT1U7WUFBVVYsT0FBT1csSUFBSTtZQUFFWCxPQUFPWSxJQUFJO1lBQzFEZCxPQUFPVztZQUNQWCxPQUFPWTtZQUNOLFFBQVFaLENBQUFBLE9BQU9XO1lBQ2YsRUFBQ1gsT0FBT1k7U0FDWjtRQUVEbkIsR0FBR3VCLEtBQUssQ0FBQ1AsS0FBS0M7WUFDVixJQUFJTyxPQUFPO2dCQUNQRSxRQUFRRixLQUFLLENBQUMsa0NBQWtDQTtnQkFDaERuQixJQUFJc0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUzs7cURBQ3BDLEdBQU87Z0JBQ0hILFFBQVFJO2dCQUNSekIsSUFBSXNCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7Z0JBQTBCO1lBQzlELENBQUM7UUFDTDtJQUNKLE9BQU87UUFDSHhCLElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBcUI7SUFDekQsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZvcm1hc2ltYXNqaWQvLi9wYWdlcy9hcGkvc2F2ZURhdGEyLmpzPzMzY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tICcuLi8uLi9saWIvZGInO1xyXG5pbXBvcnQgeyBwYXJzZSwgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnOyAvLyBJbXBvcnQgZnVuZ3NpIHBhcnNlIGRhbiBmb3JtYXQgZGFyaSBkYXRlLWZuc1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCB7IHNoaWZ0MSwgc2hpZnQyLCBzaGlmdDMsIHRhbmdnYWwsIG1hY2hpbmVfbmFtZSB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkVGFuZ2dhbCA9IHBhcnNlKHRhbmdnYWwsICdkZC9NTS95eXl5JywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVGFuZ2dhbCA9IGZvcm1hdChwYXJzZWRUYW5nZ2FsLCAneXl5eS1NTS1kZCcpOyAvLyBNZW1mb3JtYXQgdGFuZ2dhbCBzZXN1YWkgZGVuZ2FuIGZvcm1hdCB5YW5nIGRpaGFyYXBrYW4gb2xlaCBNeVNRTFxyXG5cclxuICAgICAgICAvLyBMYWt1a2FuIG9wZXJhc2kgcGVueWltcGFuYW4gZGF0YSBrZSBkYXRhYmFzZVxyXG4gICAgICAgIGNvbnN0IHNxbCA9IGBJTlNFUlQgSU5UTyBtdGJmX210dHJfcmVzdWx0c18yIFxyXG4gICAgICAgICAgICAgICAgICh0YW5nZ2FsLCBtYWNoaW5lX25hbWUsIFxyXG4gICAgICAgICAgICAgICAgICBzaGlmdDFfZmFpbHVyZXMsIHNoaWZ0MV9kb3dudGltZSwgc2hpZnQxX210YmYsIHNoaWZ0MV9tdHRyLCBcclxuICAgICAgICAgICAgICAgICAgc2hpZnQyX2ZhaWx1cmVzLCBzaGlmdDJfZG93bnRpbWUsIHNoaWZ0Ml9tdGJmLCBzaGlmdDJfbXR0ciwgXHJcbiAgICAgICAgICAgICAgICAgIHNoaWZ0M19mYWlsdXJlcywgc2hpZnQzX2Rvd250aW1lLCBzaGlmdDNfbXRiZiwgc2hpZnQzX210dHIsIFxyXG4gICAgICAgICAgICAgICAgICB0b3RhbF9mYWlsdXJlcywgdG90YWxfZG93bnRpbWUsIHRvdGFsX210YmYsIHRvdGFsX210dHIpIFxyXG4gICAgICAgICAgICAgICAgIFZBTFVFUyAoPywgPywgPywgPywgPywgPywgPywgPywgPywgPywgPywgPywgPywgPywgPywgPywgPywgPylgO1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIGZvcm1hdHRlZFRhbmdnYWwsIC8vIE1lbmdndW5ha2FuIHRhbmdnYWwgeWFuZyBzdWRhaCBkaWZvcm1hdFxyXG4gICAgICAgICAgICBtYWNoaW5lX25hbWUsXHJcbiAgICAgICAgICAgIHNoaWZ0MS5mYWlsdXJlcywgc2hpZnQxLmRvd250aW1lLCBzaGlmdDEubXRiZiwgc2hpZnQxLm10dHIsXHJcbiAgICAgICAgICAgIHNoaWZ0Mi5mYWlsdXJlcywgc2hpZnQyLmRvd250aW1lLCBzaGlmdDIubXRiZiwgc2hpZnQyLm10dHIsXHJcbiAgICAgICAgICAgIHNoaWZ0My5mYWlsdXJlcywgc2hpZnQzLmRvd250aW1lLCBzaGlmdDMubXRiZiwgc2hpZnQzLm10dHIsXHJcbiAgICAgICAgICAgIHNoaWZ0MS5mYWlsdXJlcyArIHNoaWZ0Mi5mYWlsdXJlcyArIHNoaWZ0My5mYWlsdXJlcyxcclxuICAgICAgICAgICAgc2hpZnQxLmRvd250aW1lICsgc2hpZnQyLmRvd250aW1lICsgc2hpZnQzLmRvd250aW1lLFxyXG4gICAgICAgICAgICAoMTQ0MCAvIChzaGlmdDEuZmFpbHVyZXMgKyBzaGlmdDIuZmFpbHVyZXMgKyBzaGlmdDMuZmFpbHVyZXMpKS50b0ZpeGVkKDIpLFxyXG4gICAgICAgICAgICAoKHNoaWZ0MS5kb3dudGltZSArIHNoaWZ0Mi5kb3dudGltZSArIHNoaWZ0My5kb3dudGltZSkgLyAoc2hpZnQxLmZhaWx1cmVzICsgc2hpZnQyLmZhaWx1cmVzICsgc2hpZnQzLmZhaWx1cmVzKSkudG9GaXhlZCgyKVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGRiLnF1ZXJ5KHNxbCwgdmFsdWVzLCAoZXJyb3IsIHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgZGF0YSB0byBkYXRhYmFzZTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0RhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5OicsIHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnRGF0YSBzYXZlZCBzdWNjZXNzZnVsbHknIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwicGFyc2UiLCJmb3JtYXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic2hpZnQxIiwic2hpZnQyIiwic2hpZnQzIiwidGFuZ2dhbCIsIm1hY2hpbmVfbmFtZSIsImJvZHkiLCJwYXJzZWRUYW5nZ2FsIiwiRGF0ZSIsImZvcm1hdHRlZFRhbmdnYWwiLCJzcWwiLCJ2YWx1ZXMiLCJmYWlsdXJlcyIsImRvd250aW1lIiwibXRiZiIsIm10dHIiLCJ0b0ZpeGVkIiwicXVlcnkiLCJlcnJvciIsInJlc3VsdHMiLCJjb25zb2xlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveData2.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/saveData2.js"));
module.exports = __webpack_exports__;

})();