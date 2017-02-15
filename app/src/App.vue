<template>
  <div id="app">
    <navigation></navigation>
    <container></container>
  </div>
</template>

<script>
import Navigation from './components/global/navigation';
import Container from './components/global/container';
import Member from './components/global/member';

export default {
  name: 'app',

  components: {
    Navigation,
    Container,
    Member
  },

  data() {
    return {

    }
  }
}
</script>

<style>
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }

  body,
  .section.main,
  .hero-body {
    background: #f5f8fa;
  }

  /*these aren't gloabl - need to be moved to individual components*/
  .media.movie {
    padding-bottom: 15px;
  }
  .card {
      border-radius: 4px;
  }
  .card-header {
      background-color: #f9f9f9;
      background-position: 0 50%;
      background-size: 100% auto;
      border-bottom: 1px solid #e1e8ed;
      border-radius: 4px;
      height: 95px;
      width: 100%;
  }
  .card-header .button.follow {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .recs-title {
    padding-bottom: 3px;
  }
  .card-content {
      padding: 0px;
  }
  .card-avatar {
    background-color: #fff;
    border-radius: 6px;
    display: inline-block !important;
    float: left;
    margin: -30px 5px 0 8px;
    max-width: 100%;
    padding: 1px;
    vertical-align: bottom;
  }
  .card-avatar-img {
    border: 2px solid #fff;
    border-radius: 7px;
    box-sizing: border-box;
    color: #fff;
    height: 72px;
    width: 72px;
  }
  .card-user {
      margin: 5px 0 0;
  }
  .card-user-name{
      font-size: 18px;
      font-weight: 700;
      line-height: 21px;
  }
  .card-user-name a{
      color: inherit !important;
  }
  .card-stats {
      margin-left: 11px;
      padding: 10px 0;
  }
  .card-stats-list {
      box-sizing: border-box;
      display: table;
      margin: 0;
      min-width: 100%;
      padding: 0;
      table-layout: auto;
  }
  ul.card-stats-list {
      list-style: outside none none;
      margin: 0;
      padding: 0;
  }
  .card-stats-item {
      display: table-cell;
      padding: 0;
      vertical-align: top;
  }
  .card-stats-item a:hover {
      text-decoration: none;
  }
  .card-stats-val {
      display: block;
      font-size: 18px;
      font-weight: 500;
      transition: color 0.15s ease-in-out 0s;
  }
  .card-stats-key {
      color: #8899a6;
      font-size: 10px;
      letter-spacing: 0.02em;
      overflow: hidden;
      text-transform: uppercase;
      transition: color 0.15s ease-in-out 0s;
  }
  .card-login {
    padding: 30px;
  }
  .spacer {
    height:20px;
  }

  .trending .trend-title {
    padding-bottom: 10px;
  }

  .trending .trend-hashtag {
    padding-bottom: 8px;
  }
  .right {
    float: right;
  }
  .search {
    padding-left: 17px;
    padding-right: 17px;
  }
  .search input {
    padding: 18px 10px;
  }
  .search .button {
    padding: 19px;
  }
</style>
