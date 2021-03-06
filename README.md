# Smooch Core

Smooch Core is the most basic for interaction possible for the [Smooch API](http://docs.smooch.io/rest). It wraps the public API in a convenient Javascript API.

This library is meant to be used server-side with Node.js.

## Installation
```bash
$ npm install smooch-core --save
```

## Contributing

If a method is missing please file an Issue, or better yet make a PR!

## Usage

```js
var SmoochCore = require('smooch-core');

// using generated JWT
var smooch = new SmoochCore({
    jwt: 'some-jwt'
});

// using JWT components
var smooch = new SmoochCore({
    keyId: 'some-key',
    secret: 'some-secret',
    scope: 'appUser', // account, app, or appUser
    userId: 'some-id' // only required for appUser scope
});

// ...

smooch.webhooks.get(id).then(function(response) {
  // do something with the response.
});

```

#### Usage with a proxy
If you need to use a proxy, you can use one of the [many](https://www.npmjs.com/package/socks-proxy-agent) [proxies](https://www.npmjs.com/package/http-proxy-agent) [available](https://www.npmjs.com/package/https-proxy-agent), as long as it an `http.Agent` implementation. You only need to pass the agent when creating the SmoochCore instance.


```js
var SmoochCore = require('smooch-core');
var SocksProxyAgent = require('socks-proxy-agent');
var proxy = process.env.http_proxy || 'socks://localhost:8123';
var agent = new SocksProxyAgent(proxy);

var smooch = new SmoochCore({
    keyId: 'some-key',
    secret: 'some-secret',
    httpAgent: agent
});
```

## API

Below is a list of methods included in Smooch Core. For comprehensive documentation of Smooch Core and its methods see Smooch's [REST API docs](https://docs.smooch.io/rest/).

For more detailed information and example usage of each of the following methods, click on the method's :link: icon.

| Method                        | Description | Link  |
| ----------------------------- | ----------- | :---: |
| **appUsers Module**           | | |
| `appUsers.get`                | Get a specific appUser.  | [:link:](https://docs.smooch.io/rest/?javascript#get-app-user) |
| `appUsers.update`             | Update an appUser’s basic profile information and specify custom profile data. | [:link:](https://docs.smooch.io/rest/?javascript#update-app-user) |
| `appUsers.deleteProfile`      | Delete an appUser’s profile. | [:link:](https://docs.smooch.io/rest/?javascript#delete-app-user) |
| `appUsers.create`             | Pre-create an appUser object before that appUser runs your app for the first time. | [:link:](https://docs.smooch.io/rest/?javascript#pre-create-app-user) |
| `appUsers.linkChannel`        | Link appUser to continue conversation on his/her preferred channel. | [:link:](https://docs.smooch.io/rest/?javascript#link-app-user-to-channel) |
| `appUsers.unlinkChannel`      | Remove the specified channel from the appUser’s clients. | [:link:](https://docs.smooch.io/rest/?javascript#unlink-app-user-from-channel) |
| `appUsers.getMessages`        | Get the specified appUser’s conversation history. | [:link:](https://docs.smooch.io/rest/?javascript#get-messages) |
| `appUsers.resetUnreadCount`   | Reset the unread count of the conversation to 0. | [:link:](https://docs.smooch.io/rest/?javascript#reset-unread-count) |
| `appUsers.typingActivity`     | Notify Smooch when an app maker starts or stops typing a response. | [:link:](https://docs.smooch.io/rest/?javascript#typing-activity) |
| `appUsers.sendMessage`        | Post a message to or from the appUser. | [:link:](https://docs.smooch.io/rest/?javascript#post-message) |
| `appUsers.deleteMessages`     | Clears the message history for an appUser, permanently deleting all messages. | [:link:](https://docs.smooch.io/rest/?javascript#delete-messages) |
| `appUsers.getChannels`        | Get all of the appUser’s channel entity Ids. | [:link:](https://docs.smooch.io/rest/?javascript#get-app-user-channel-entities) |
| `appUsers.getBusinessSystems` | Get all the business systems to which an appUser’s conversation is connected.| [:link:](https://docs.smooch.io/rest/?javascript#get-app-user-business-system-ids) |
| `appUsers.getAuthCode`        | Get auth code. | [:link:](https://docs.smooch.io/rest/?javascript#get-auth-code) |
| `appUsers.getLinkRequests`    | Generate a transfer URL for a given channel type. | [:link:](https://docs.smooch.io/rest/?javascript#get-link-request) |
| **menu Module**               | | |
| `menu.get`                    | Get the specified app’s menu. | [:link:](https://docs.smooch.io/rest/?javascript#get-app-menu) |
| `menu.configure`              | Configure the specified app’s menu. | [:link:](https://docs.smooch.io/rest/?javascript#update-app-menu) |
| `menu.remove`                 | Remove the specified app’s menu. | [:link:](https://docs.smooch.io/rest/?javascript#delete-app-menu) |
| **webhooks Module**           | | |
| `webhooks.list`               | List all webhooks configured for a given app. | [:link:](https://docs.smooch.io/rest/?javascript#list-webhooks) |
| `webhooks.create`             | Create a webhook for the specified app. | [:link:](https://docs.smooch.io/rest/?javascript#create-webhook) |
| `webhooks.get`                | Get individual webhooks. | [:link:](https://docs.smooch.io/rest/?javascript#get-webhook) |
| `webhooks.update`             | Update existing webhooks. | [:link:](https://docs.smooch.io/rest/?javascript#update-webhook) |
| `webhooks.delete`             | Delete specified webhook. | [:link:](https://docs.smooch.io/rest/?javascript#delete-webhook) |
| **apps Module**               | | |
| `apps.create`                 | Create a new app. | [:link:](https://docs.smooch.io/rest/?javascript#create-app) |
| `apps.list`                   | List all configured apps. | [:link:](https://docs.smooch.io/rest/?javascript#list-apps) |
| `apps.get`                    | Get the specified app. | [:link:](https://docs.smooch.io/rest/?javascript#get-app) |
| `apps.delete`                 | Delete the specified app, including all its enabled integrations. | [:link:](https://docs.smooch.io/rest/?javascript#delete-app) |
| `apps.keys.create`            | Create a secret key for the specified app. | [:link:](https://docs.smooch.io/rest/?javascript#create-app-key) |
| `apps.keys.list`              | List all secret keys for the sepcified app. | [:link:](https://docs.smooch.io/rest/?javascript#list-app-keys) |
| `apps.keys.get`               | Get a secret key. | [:link:](https://docs.smooch.io/rest/?javascript#get-app-key) |
| `apps.keys.delete`            | Delete a secret key. | [:link:](https://docs.smooch.io/rest/?javascript#delete-app-key) |
| `apps.keys.getJwt`            | Get an app-scoped JWT signed using the requested keyId/secret pair. | [:link:](https://docs.smooch.io/rest/?javascript#get-app-jwt) |
| **integrations Module**       | | |
| `integrations.create`         | Create a new integration. | [:link:](https://docs.smooch.io/rest/?javascript#create-integration) |
| `integrations.list`           | List all integrations for a given app. | [:link:](https://docs.smooch.io/rest/?javascript#list-integrations) |
| `integrations.get`            | Return the specified integration. | [:link:](https://docs.smooch.io/rest/?javascript#get-integration) |
| `integrations.update`         | Update the specified integration. | [:link:](https://docs.smooch.io/rest/?javascript#update-integration) |
| `integrations.delete`         | Delete the specified integration. | [:link:](https://docs.smooch.io/rest/?javascript#delete-integration) |
| `integrations.menu.get`       | Get the specified integration’s menu. | [:link:](https://docs.smooch.io/rest/?javascript#get-integration-menu) |
| `integrations.menu.update`    | Update the specified integration’s menu. | [:link:](https://docs.smooch.io/rest/?javascript#update-integration-menu) |
| `integrations.menu.delete`    | Delete the specified integration's menu. | [:link:](https://docs.smooch.io/rest/?javascript#delete-integration-menu) |
| **serviceAccounts Module**    | | |
| `serviceAccounts.create`      | Create a new service account. | [:link:](https://docs.smooch.io/rest/?javascript#create-service-account) |
| `serviceAccounts.list`        | List all service accounts. | [:link:](https://docs.smooch.io/rest/?javascript#list-service-accounts) |
| `serviceAccounts.get`         | Get the specified service account. | [:link:](https://docs.smooch.io/rest/?javascript#get-service-account) |
| `serviceAccounts.delete`      | Delete the specified service account. | [:link:](https://docs.smooch.io/rest/?javascript#delete-service-account) |
| `serviceAccounts.keys.create` | Create a secret key for the specified service account. | [:link:](https://docs.smooch.io/rest/?javascript#create-service-account-key) |
| `serviceAccounts.keys.list`   | List all secret keys for the specified service account. | [:link:](https://docs.smooch.io/rest/?javascript#list-service-account-keys) |
| `serviceAccounts.keys.get`    | Get a specified secret key for the specified service account. | [:link:](https://docs.smooch.io/rest/?javascript#get-service-account-key) |
| `serviceAccounts.keys.delete` | Delete a specified secret key for the specified service account.| [:link:](https://docs.smooch.io/rest/?javascript#delete-service-account-key) |
| `serviceAccounts.keys.getJwt` | Get an account-scoped JWT signed using the requested keyId/secret pair. | [:link:](https://docs.smooch.io/rest/?javascript#get-service-account-jwt) |
| **attachments Module**        | | |
| `attachments.create`          | Upload an attachment to Smooch to use in future messages. | [:link:](https://docs.smooch.io/rest/?javascript#upload-attachment) |

## Release process
1. Merge your changes in `master`.
2. Wait for CircleCI to run the test suite on `master`.
3. Run `npm run release -- <level> --run`. Replace `<level>` with `patch`, `minor`, `major` depending on which type of version this is.
