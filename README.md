# ts-my

The official repository for Trader4 my (panel) TypeScript package.

```javascript
import { accounts } from "@trader4/my-ts";

// Create the package instance
const accounts = accounts();

// Now you have access to everything :)
// feel free to add more config to your project
accounts.config.headers = { Authorization: "ACCESS_TOKEN" };

// Now you can retrieve all trading accounts of user in Trader4
let accountsItems = accounts.list();
```
