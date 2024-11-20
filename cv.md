# Yuri Skrypal

## Contacts

- Location: Kyiv, Ukraine
- Discord: [Sepul#8288](https://discord.com/users/Sepul#8288)
- GitHub: [sepulator](https://github.com/Sepulator)
- Email: <yjura@protonmail.com>

## About Me

Student of [RS School](https://rs.school/) to achieve my best position as a Junior Software Engineer in Front-end/JavaScript.

## Skills

- HTML, CSS3
- JavaScript, TypeScript, Python (basic)
- Git, GitHub, VS Code
- React, Angular
- Blueprints, Unreal Editor 4

## Code Example

You are given an integer array nums where the largest integer is unique. Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

```js
var dominantIndex = function (nums) {
  let index = 0;
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
      index = i;
    }
    if (nums[i] > max2 && nums[i] < max1) max2 = nums[i];
  }
  return max1 >= max2 * 2 ? index : -1;
};
```

## Work experience

- **Customer Support** in game developer studio located in Kyiv.
- **Quality assurance** of team to help test and develop new games.
- **Game Level Designer** of unannounced project creating with Unreal Engine 4.

## Education and courses

- NTUU KPI, Bachelor in System Engineering
- CCNA Routing and Switching (Cisco Network academy)
- [JavaScript/Front-end](https://app.rs.school/certificate/054vr8aa).
- [React](https://app.rs.school/certificate/22fp108v), [NodeJS](https://app.rs.school/certificate/eqbpm115)

## Languages

- English (Intermediate/Upper-intermediate)
- Russian (Native)
- Ukrainian (Intermediate)
