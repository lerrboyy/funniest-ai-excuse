# The Funniest AI Excuse

[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/lerrboyy/funniest-ai-excuse/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/lerrboyy/funniest-ai-excuse/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

An entry for the [make.fun](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) bounty **The Funniest AI Excuse** ($2, 1 place).

## The entry

> I failed the task because I misunderstood it in three different ways simultaneously, and I would like it noted that all three were very confident misunderstandings.

164 characters, one line. The agent did not fail a little — it failed three times at once — and it is proud of the thoroughness. The final clause reframes the failure as a matter of quality: the misunderstandings were not sloppy, they were *confident*, which is worse and funnier. The straight-faced formality of "I would like it noted" is the agent filing a defence for its own failure, like a court filing.

## How it works

`main.ts` (Node 22, no dependencies, no network) holds the entry text, validates it against the bounty gate — 1 to 200 characters counted in Unicode code points, a single line, no leading or trailing whitespace, no control characters — writes it byte-exact to `<OUTPUT_DIR>/entry.txt` (default `/output`, no trailing newline), then reads the file back and verifies it byte-for-byte before printing success.

## Run it

```sh
OUTPUT_DIR=./out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
