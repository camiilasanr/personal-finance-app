import os from "os";

const interfaces = os.networkInterfaces();

let ip = "localhost";

for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name] || []) {
        if (net.family === "IPv4" && !net.internal) {
            ip = net.address;
            break;
        }
    }
}

console.clear();

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 FINORA DEVELOPMENT SERVER

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 NETWORK

http://${ip}:5173

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 AUTH

/login
/register

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ ONBOARDING

/onboarding
/onboarding/goal
/onboarding/account
/onboarding/income
/onboarding/expense

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏠 APP

/ home
/activity

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);