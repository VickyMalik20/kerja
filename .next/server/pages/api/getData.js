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
exports.id = "pages/api/getData";
exports.ids = ["pages/api/getData"];
exports.modules = {

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("serverless-mysql");

/***/ }),

/***/ "(api)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeDbConnection\": () => (/* binding */ closeDbConnection),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n    config: {\n        host: process.env.MYSQL_HOST,\n        database: process.env.MYSQL_DATABASE,\n        user: process.env.MYSQL_USERNAME,\n        password: process.env.MYSQL_PASSWORD,\n        port: parseInt(process.env.MYSQL_PORT) // Tidak perlu melakukan parseInt jika sudah dalam format yang benar\n    }\n});\n// Fungsi untuk menutup koneksi\nconst closeDbConnection = async ()=>{\n    await db.end();\n};\nasync function handler(req, res) {\n    try {\n        const results = await db.query(\"SELECT * FROM your_table\"); // Ganti dengan query yang sesuai\n        res.status(200).json(results);\n    } catch (error) {\n        console.error(\"Error executing database query:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFFOUIsTUFBTUMsS0FBS0QsdURBQUtBLENBQUM7SUFDcEJFLFFBQVE7UUFDSkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBQzVCQyxVQUFVSCxRQUFRQyxHQUFHLENBQUNHLGNBQWM7UUFDcENDLE1BQU1MLFFBQVFDLEdBQUcsQ0FBQ0ssY0FBYztRQUNoQ0MsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxjQUFjO1FBQ3BDQyxNQUFNQyxTQUFTVixRQUFRQyxHQUFHLENBQUNVLFVBQVUsRUFBRSxvRUFBb0U7SUFDL0c7QUFDSixHQUFHO0FBRUgsK0JBQStCO0FBQ3hCLE1BQU1DLG9CQUFvQixVQUFZO0lBQ3pDLE1BQU1mLEdBQUdnQixHQUFHO0FBQ2hCLEVBQUU7QUFFYSxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFJO1FBQ0EsTUFBTUMsVUFBVSxNQUFNcEIsR0FBR3FCLEtBQUssQ0FBQyw2QkFBNkIsaUNBQWlDO1FBQzdGRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtJQUN6QixFQUFFLE9BQU9JLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDakRMLElBQUlHLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QjtJQUMxRDtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmZvcm1hc2ltYXNqaWQvLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSBcInNlcnZlcmxlc3MtbXlzcWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkYiA9IG15c3FsKHtcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1ZU1FMX0hPU1QsXHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1ZU1FMX0RBVEFCQVNFLFxyXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1ZU1FMX1VTRVJOQU1FLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCxcclxuICAgICAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5NWVNRTF9QT1JUKSAvLyBUaWRhayBwZXJsdSBtZWxha3VrYW4gcGFyc2VJbnQgamlrYSBzdWRhaCBkYWxhbSBmb3JtYXQgeWFuZyBiZW5hclxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIEZ1bmdzaSB1bnR1ayBtZW51dHVwIGtvbmVrc2lcclxuZXhwb3J0IGNvbnN0IGNsb3NlRGJDb25uZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZGIuZW5kKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeSgnU0VMRUNUICogRlJPTSB5b3VyX3RhYmxlJyk7IC8vIEdhbnRpIGRlbmdhbiBxdWVyeSB5YW5nIHNlc3VhaVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBleGVjdXRpbmcgZGF0YWJhc2UgcXVlcnk6JywgZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJteXNxbCIsImRiIiwiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNWVNRTF9IT1NUIiwiZGF0YWJhc2UiLCJNWVNRTF9EQVRBQkFTRSIsInVzZXIiLCJNWVNRTF9VU0VSTkFNRSIsInBhc3N3b3JkIiwiTVlTUUxfUEFTU1dPUkQiLCJwb3J0IiwicGFyc2VJbnQiLCJNWVNRTF9QT1JUIiwiY2xvc2VEYkNvbm5lY3Rpb24iLCJlbmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzdWx0cyIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/getData.js":
/*!******************************!*\
  !*** ./pages/api/getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api)/./lib/db.js\");\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const { id  } = req.query;\n        _lib_db__WEBPACK_IMPORTED_MODULE_0__.db.query(\"SELECT * FROM mtbf_mttr_results WHERE id = ?\", [\n            id\n        ], (error, results)=>{\n            if (error) {\n                console.error(\"Error fetching data from database:\", error);\n                res.status(500).json({\n                    message: \"Internal Server Error\"\n                });\n            } else {\n                res.status(200).json(results[0]);\n            }\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrQztBQUVuQixTQUFTQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN0QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN0QixNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHSCxJQUFJSSxLQUFLO1FBQ3hCTiw2Q0FBUSxDQUFDLGdEQUFnRDtZQUFDSztTQUFHLEVBQUUsQ0FBQ0UsT0FBT0MsVUFBWTtZQUMvRSxJQUFJRCxPQUFPO2dCQUNQRSxRQUFRRixLQUFLLENBQUMsc0NBQXNDQTtnQkFDcERKLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7Z0JBQXdCO1lBQzVELE9BQU87Z0JBQ0hULElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNILE9BQU8sQ0FBQyxFQUFFO1lBQ25DLENBQUM7UUFDTDtJQUNKLE9BQU87UUFDSEwsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQ3pELENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5mb3JtYXNpbWFzamlkLy4vcGFnZXMvYXBpL2dldERhdGEuanM/MTQzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9saWIvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeTtcclxuICAgICAgICBkYi5xdWVyeSgnU0VMRUNUICogRlJPTSBtdGJmX210dHJfcmVzdWx0cyBXSEVSRSBpZCA9ID8nLCBbaWRdLCAoZXJyb3IsIHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhIGZyb20gZGF0YWJhc2U6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdHNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImlkIiwicXVlcnkiLCJlcnJvciIsInJlc3VsdHMiLCJjb25zb2xlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getData.js"));
module.exports = __webpack_exports__;

})();