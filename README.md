# ts-my

The official repository for Trader4 my (panel) TypeScript package.

\***\* First of all set your **baseURL** using `config` Object \*\***

```javascript
import { tradingAccounts } from "@trader4/my-ts";

// Create the package instance
const tradingAccounts = tradingAccounts();

// Now you have access to everything :)
tradingAccounts.config.baseURL = "your_baseURL_here";

// feel free to add more config to your project
tradingAccounts.config.headers = { Authorization: "ACCESS_TOKEN" };
```
