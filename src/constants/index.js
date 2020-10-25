const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://v2.api-football.com/';
const current_leagues_get = 'leagues/current/';
const league_get = 'leagues/league/';
const league_search  = 'leagues/search/';
const league_table   = 'leagueTable/'
const teams_league_get = 'teams/league/';
const teams_search = 'teams/search/';
const team_get = 'teams/team/';
const team_statistics = 'statistics/';
const standings_leaugue_get = 'leagueTable/';
const team_squad = 'players/squad/';
const player_statistics_get = 'players/player/';
const fixtures_get = 'fixtures/league/';
const countries_get = 'countries/';
const league_country = 'leagues/country/';
const slash = '/';

export const currentLeaguesGet = () => `${ cors_anywhere }${ base_url }${ current_leagues_get }`;
export const leagueGet = league_id => `${ cors_anywhere }${ base_url }${ league_get }${ league_id }`; 
export const leagueSearch = name => `${ cors_anywhere }${ base_url }${ league_search }${ name }`; 
export const leagueTableGet = league_id => `${ cors_anywhere }${ base_url }${ league_table }${ league_id }`
export const teamLeagueGet = league_id => `${ cors_anywhere }${ base_url }${ teams_league_get }${ league_id }`; 
export const teamSearch = name => `${ cors_anywhere }${ base_url }${ teams_search }${ name }`;  
export const teamGet = team_id => `${ cors_anywhere }${ base_url }${ team_get }${ team_id }`;  
export const teamStatistics = ( league_id, team_id ) => `${ cors_anywhere }${ base_url }${ team_statistics }${ league_id }${ slash }${ team_id }`;  
export const standingsLeagueGet = league_id => `${ cors_anywhere }${ base_url }${ standings_leaugue_get }${ league_id }`;  
export const teamSquad = ( team_id, season ) => `${ cors_anywhere }${ base_url }${ team_squad }${ team_id }${ slash }${ season }`;
export const playerStatisticsGet = ( player_id, season ) => `${ cors_anywhere }${ base_url }${ player_statistics_get }${ player_id }${ slash }${ season }`; 
export const fixturesGet = ( league_id, date ) => `${ cors_anywhere }${ base_url }${ fixtures_get }${ league_id }${ slash }${ date }`; 
export const countriesGet = () => `${ cors_anywhere }${ base_url }${ countries_get }`;
export const leagueCountry = country => `${ cors_anywhere }${ base_url }${ league_country }${ country }`;
export const currentSeason = new Date().getFullYear();
export const currentDate   = new Date();
export const currentFormatDate = `${currentDate.getFullYear()}${currentDate.getMonth()}-${currentDate.getDay()}`;
export const api_key = '06155b62425e4b7579b7041466d5854c';///*'2a51588a7880b3ce293422d0d309f712';*/'bfbd968a1b0a0e231c7a5129eb073e5f';
export const api_key_2 = () => {   
  const localApi = localStorage.getItem('apiUserKey');    
  return localApi !== '' ? localApi :  api_key;
}; 
export const sp_league_id = 2833;
export const en_league_id = 2790;
export const gr_league_id = 2755;
export const fr_league_id = 2664;
export const cl_league_id = 1342;
export const it_league_id = 2857;
export const league_array = [sp_league_id, en_league_id, gr_league_id, fr_league_id, cl_league_id, it_league_id];
export const league_array_info = [
    { name: 'Chile Primera Division', id: cl_league_id },
    { name: 'Spain Primera Division', id: sp_league_id },
    { name: 'Premier League', id: en_league_id },
    { name: 'League 1', id: fr_league_id },
    { name: 'Bundesliga', id: gr_league_id },
   
  ];
  




