# Git workflow

## Git commit message

Git commit message template:
```
   ╔════ JIRA task number (read more below)
   ║
   ║          ╔════ The commit message (read more below)
   ║          ║
╔══╩═══╗  ╔═══╩════════╗
FIG-0000: Commit message
        ││
        │└─────── Mandatory empty space
        │           
        └──────── Mandatory colon :
```


#### JIRA task number

There could be situations where you do not have a JIRA task. In these (and only these) situations
this part can be skipped.

Please avoid multiple JIRA tasks being placed in the commit message. Use separate commits for separate tasks. If a fix applies for 2 or more tasks, use the task for the most critical one in the commit message and add a list of the rest of the fixed tasks in the commit body.


#### The commit message

The seven rules of a well written commit message:
1. Separate subject from body with a blank line;
1. Limit the subject line to 50 characters;
1. Capitalize the subject line;
1. Do not end the subject line with a period;
1. Use the imperative mood in the subject line;
1. Wrap the body at 70 characters;
1. Use the body to explain `what` and `why` vs. `how`.


A properly formed commit subject line should always be able to complete the following sentence:

> If applied, this commit will `your subject line here`

For example:

* If applied, this commit will `refactor subsystem X for readability`
* If applied, this commit will `update getting started documentation`
* If applied, this commit will `remove deprecated methods`
* If applied, this commit will `release version 1.0.0`

Notice how this **doesn't** work for the other non-imperative forms:

* If applied, this commit will `fixed bug with Y`
* If applied, this commit will `changing behavior of X`
* If applied, this commit will `more fixes for broken stuff`
* If applied, this commit will `sweet new API methods`

Remember: Use of the imperative is important only in the subject line.
You can relax this restriction when you're writing the body.


#### EMOJI :smile:

You can use emoji in each commit message with this form:

`FIG-1234: :emoji: Commit message`

**Emoji map:**

| Commit Type             | Emoji                                           | Description |
| -----------             | -----                                           | ----------- |
| Merge feature branch    | :sparkles: `:sparkles:`                         |             |
| Refactoring             | :hammer: `:hammer:`                             |             |
| Add functionality       | :wrench: `:wrench:`                             |             |
| Add/Modify Tests        | :rotating_light: `:rotating_light:`             |             |

> Bugs

| Commit Type             | Emoji                                           | Description |
| -----------             | -----                                           | ----------- |
| Critical hotfix (stage) | :fire: `:fire:`                                 |             |
| Bugfix                  | :bug: `:bug:`                                   |             |


> Dependency management

| Commit Type             | Emoji                                           | Description |
| -----------             | -----                                           | ----------- |
| Add a dependency        | :heavy_plus_sign: `:heavy_plus_sign:`           |             |
| Remove a dependency     | :heavy_minus_sign: `:heavy_minus_sign:`         |             |
| Upgrade a dependency    | :arrow_up: `:arrow_up:`                         |             |
| Downgrade a dependency  | :arrow_down: `:arrow_down:`                     |             |


> Deployment Emojis

| Commit Type             | Emoji                                           | Description |
| -----------             | -----                                           | ----------- |
| Deploy                  | :rocket: `:rocket:`                             |             |
| Backport                | :rewind: `:rewind:`                             |             |
| Revert                  | :no_entry: `:no_entry:`                         |             |


> Rarely used

| Commit Type             | Emoji                                           | Description |
| -----------             | -----                                           | ----------- |
| Work in progress        | :construction: `:construction:`                 |             |
| Documentation           | :books: `:books:`                               |             |
| Performance             | :racehorse: `:racehorse:`                       |             |
| Accessibility           | :wheelchair: `:wheelchair:`                     |             |
| Internationalization    | :globe_with_meridians: `:globe_with_meridians:` |             |


Examples:
> * FIG-1234: :sparkles: Implement the new feature
> * FIG-1235: :arrow_up: Upgrade `package@1.8.9`
> * FIG-1236: :bug: Fix pagination buttons spacing for Firefox


***


## Development

Commits on the master branch should be made as soon as features are complete. Commit checklist:
- [x] code-review has been done
- [x] code style and linting tools don't report errors
- [x] all tests are passing
- [x] commits are rebased with the latest **master**
- [x] commit message is good, descriptive and includes JIRA task number


**When merging a fix, a single commit, or multiple unrelated commits into master use the following command:**

```
git merge --ff-only <branch name>
```

* use fast forward `--ff-only`

**When merging a feature branch into master use the following command:**

```
git merge --no-ff --edit --log <branch name>
```

* make a merge commit (`--no-ff` flag)
* commit message (use `--edit` option) should follow the pattern: `FIG-<number>: <message>`
* include a changelog since last master (`--log` option)

**Always** edit the first line as explained in the section above.
If the branch is for a story and contains sub-tasks, use the task number of the story and a descriptive message.

:warning: **NOTICE**

> When merging branches, **don't use** the merge pull-request feature from :octocat: `github`.

***

:rocket: Happy coding
