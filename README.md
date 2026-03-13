# Myriad Melodies Tracker
#### For tracking maps you've played, how you rate them, and more
This file is currently more of a way for us to keep track of what we've done and what still needs done

## UI

## API

## Database
Note - all int, smallint, and tinyint are unsigned
Table structure:

#### `chart_info`
| Column Name       | Data Type    | Key | Description                                                                                                                     |
|-------------------|--------------|-----|---------------------------------------------------------------------------------------------------------------------------------|
| sharing_code      | int          | PK  | The code used in game and on the interaction platform.                                                                          |
| mapper_uid        | int          | FK  | UID of the person that created the chart.                                                                                       |
| music_id          | smallint     | FK  | ID of the track. FK for `music_info`                                                                                |
| star_difficulty   | tinyint      |     | Star difficulty of the track from 1-10                                                                                          |
| note_count        | smallint     |     | How many notes are in the chart.                                                                                                |
| last_publish_time | datetime     |     | The most recent publish time of the chart.                                                                                      |
| key_layout        | tinyint      |     | 4 or 6, depending on if the chart is 4k or 6k                                                                                   |
| finger_count      | varchar(5)   |     | "Two" or "Multi", how many fingers are needed to play the chart                                                                 |
| tags              | varchar(120) |     | Semicolon delimited. "Casual Play", "Advanced Challenge", "Multiple Single Notes", "Multiple Arpeggios", "Multiple Long Notes". |


#### `music_info`
| Column Name | Data Type   | Key | Description                                                   |
|-------------|-------------|-----|---------------------------------------------------------------|
| music_id    | smallint    | PK  | ID of the track.                                              |
| title       | varchar(50) |     | Title of the track.                                           |
| album       | varchar(70) |     | What album the track is from.                                 |
| bpm         | tinyint     |     | Beats per minute.                                             |
| length      | smallint    |     | Length of the track, in seconds.                              |
| cover_id    | varchar(55) |     | ID of the track's image cover (for fetching from Hoyo's API). |

#### `user`
| Column Name    | Data Type   | Key | Description                                              |
|----------------|-------------|-----|----------------------------------------------------------|
| uid            | int         | PK  | Genshin UID                                              |
| site_user_name | varchar(50) |     | The user's name on Myriad Melodies Tracker (not in game) |

#### `user_score`
| Column Name  | Data Type    | Key | Description                                                                                                                                                  |
|--------------|--------------|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| score_id     | varchar(64)  | PK  | Row identifier, no further meaning.                                                                                                                          |
| uid          | int          | FK  | FK for `user`.                                                                                                                                               |
| sharing_code | int          | FK  | FK for `chart_info`                                                                                                                                          |
| ranking      | varchar(10)  |     | Canorus (100%), Discantus (90-99.9%), Dulcem (70-89.9%), Euphonia (50-69.9%), No Ranking (<50%). Nullable.                                                   |
| rating       | tinyint      |     | 1-10 rating the user gives the map. Nullable.                                                                                                                |
| modifiers    | varchar(100) |     | Semicolon delimited. "Score Disruptions", "Hard Notes", "Don\'t Allow Mistakes", "Easy Notes".                                                               |
| last_updated | datetime     |     | The last time this row was updated.                                                                                                                          |
| map_issues   | varchar(256) |     | Semicolon delimited. Checkboxes on the UI side for common map issues such as: Notes too early, notes too late, note spam, live mapped, notes off end of song |
| comments     | varchar(256) |     | User's comments on the map. Not implemented in UI yet.                                                                                                       |


## Big Boi TODO list/ideas
- API calls for saving info from user input
- Some form of logging in that ties to your UID
- Using the UID from session storage for sending updates to API
- Add NPM to UI
- Add 2f vs 6f to UI
- Add common issues with maps as checkboxes on the UI
  - and BIT columns in database
  - notes too soon, notes too late, notes off end of song, live mapped, wrong tags (2f vs 6f), note spam
- Recently updated icon/flag on UI for if the map has been published after `last_updated` for the user
- API proxy calls to Hoyo's API to remove Corsproxy dependency
- Add mods to UI/database (Score Disruption, Hard Notes, Don't Allow Mistakes, Easy Notes)
- Decide on and acquire a custom domain name
- A browse page for searching for tracks to play
  - With filters for BPM, length, etc
- Some way to view what others on the site have rated/ranked a map
  - Will this require a friends list of sorts so you can choose to only view what your friends have rated?
- View a list of tracks others have played but you have not
  - Should be relatively easy with a SQL stored proc actually
- Add an easy copy sharing code to UI
- Add the ability to switch regions
  - will need to change the url we use for Hoyo's API for this