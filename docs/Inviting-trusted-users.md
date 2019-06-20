# Inviting trusted users to Yandex Toloka sandbox

## Introduction

It is always a good idea to test your system on a small subset of "trusted" users before making it available to a wider public. This guide will help you to set up the system for internal testing and make it available to selected testers only.

## Setting up the system

Follow the process described in this [guide](https://github.com/innosoft-pro/label-them/wiki/Getting-started-YandexToloka) to set up the system, but make sure to create your project at https://sandbox.toloka.yandex.ru instead of https://toloka.yandex.ru. Don't forget to **run your task pool** to make it available for trusted users.

**NOTE:** As sandbox and production versions are not connected, you will need to create a separate requester account at https://sandbox.toloka.yandex.ru (if you haven't done this yet), even if you already have an account at https://toloka.yandex.ru.

## Inviting trusted users

Follow these steps to invite trusted users:

1. In the main page click on [Users](https://sandbox.toloka.yandex.ru/en/requester/workers?) tab

2. Click on [Add trusted users](https://sandbox.toloka.yandex.ru/en/requester/workers/authorized)

[![Yandex_Toloka.png](https://user-images.githubusercontent.com/2508992/59835175-e8454a80-9351-11e9-8d1b-9d900434f7d0.png)](https://user-images.githubusercontent.com/2508992/59835175-e8454a80-9351-11e9-8d1b-9d900434f7d0.png)

3. Click on "Add user" in the upper right corner

4. Type a user's login and hit Add. User's login is a username with which they registered in the Toloka System. See the note below for more info.

[![add_trusted_user.png](https://user-images.githubusercontent.com/2508992/59835251-ff843800-9351-11e9-84b4-be2b1d7b968f.png)](https://user-images.githubusercontent.com/2508992/59835251-ff843800-9351-11e9-84b4-be2b1d7b968f.png)

**NOTE:** Most of the users use Yandex accounts to register within the system, but it is also possible to use login via other social networks. If you can register using other social networks that provide not only your name and email address, but also a login, then this login could be used to invite trusted users.

5. If you have tasks with open pools, these tasks will become available to the trusted users.
