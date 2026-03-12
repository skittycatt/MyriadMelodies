# Myriad Melodies Tracker
#### For tracking maps you've played, how you rate them, and more
This file is currently more of a way for us to keep track of what we've done and what still needs done

## UI

## API

## Database
Table structure:

#### MusicInfo
| MusicID  | Title  | BPM  | Length  | CoverUrl  |
|----------|--------|------|---------|-----------|

`MusicID` - Set by Hoyo themselves, though they call it `music_id`.

`Title` - Literally just the title of the track.

`BPM` - Beats per minute.

`Length` - The length of the track in seconds.

`CoverUrl` - The ID for the track's cover. Gets inserted into the full URL to pull the image for displaying on UI.

---
#### MyriadMelodies 
(placeholder table name until someone comes up with something better)
| RecordID  | SharingCode  | MusicID  | UID  | LastUpdated  | Rating  | ScoreRank  |
|-----------|--------------|----------|------|--------------|---------|------------|

`RecordID` - GUID for the row.

`SharingCode` - The sharing code for the map.

`MusicID` - Link to `MusicInfo` table.

`UID` - What we'll use for distinguishing between users.

`LastUpdated` - The most recent time this row was updated.

`Rating` - 1-10, whole numbers. The rating that a user can give to say how much they like/dislike a map.

`ScoreRank` - The score the user got while playing the map. Canorus (100%), Discantus (90-99.9%), Dulcem (70-89.9%), Euphonia (50-69.9%), No Ranking (<50%)

## Big Boi TODO list/ideas
- API calls for saving info from user input
- Some form of logging in that ties to your UID
- Using the UID from session storage for sending updates to API
- Add NPM to UI
- Add 2f vs 6f to UI
- Add common issues with maps as checkboxes on the UI
  - and BIT columns in database
  - notes too soon, notes too late, notes off end of song, live mapped, wrong tags (2f vs 6f), note spam
- Recently updated icon/flag on UI for if the map has been published after `LastUpdated` for the user
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
