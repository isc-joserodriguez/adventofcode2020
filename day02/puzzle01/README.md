# Day 02: Password Philosophy | Puzzle 1
Your flight departs in a few days from the coastal airport; the easiest way down to the coast from here is via toboggan.

The shopkeeper at the North Pole Toboggan Rental Shop is having a bad day. "Something's wrong with our computers; we can't log in!" You ask if you can take a look.

Their password database seems to be a little corrupted: some of the passwords wouldn't have been allowed by the Official Toboggan Corporate Policy that was in effect when they were chosen.

To try to debug the problem, they have created a [list](https://raw.githubusercontent.com/isc-joserodriguez/adventofcode2020/main/day02/input.txt) of **passwords** (according to the corrupted database) and **the corporate policy when that password was set**.

For example, suppose you have the following list:

```
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
```

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, ```1-3 a``` means that the password must contain ```a``` at least ```1``` time and at most ```3``` times.

**How many passwords are valid** according to their policies?

<Details>
<Summary>Solution</Summary>

Your puzzle answer was ```474```.

</Details>