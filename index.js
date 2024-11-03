"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)()); // Enable CORS
// ... Existing code ...
app.use(express_1.default.static(path_1.default.join(__dirname, '/website')));
// ... Existing code ...
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '/website/index.html'));
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map