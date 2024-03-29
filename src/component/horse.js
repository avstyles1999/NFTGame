import React from "react";
import "./horse.css";
import Tree from "./images/tree.png";

function Horse() {
  return (
    <div>
      <div id="horse1" class="horse standRight">
        <div class="rider">
          <div class="head"></div>
          <div class="body"></div>
        </div>
      </div>

      <div id="horse2" class="horse standRight">
        <div class="rider">
          <div class="head"></div>
          <div class="body"></div>
        </div>
      </div>

      <div id="horse3" class="horse standRight">
        <div class="rider">
          <div class="head"></div>
          <div class="body"></div>
        </div>
      </div>

      <div id="horse4" class="horse standRight">
        <div class="rider">
          <div class="head"></div>
          <div class="body"></div>
        </div>
      </div>

      <div className="track">
        <div id="startline"></div>

        <div class="inner">
          <button id="start">Start Race</button>

          <div id="bet">
            <p>
              You currently have <span id="funds">100</span>
            </p>
            <label>Bet Amount (£)</label>
            <input type="number" id="amount" value="0" />
            <label>Bet on horse:</label>
            <select id="bethorse">
              <option value="1">White</option>
              <option value="2">Blue</option>
              <option value="3">Green</option>
              <option value="4">Brown</option>
            </select>
            <label>Number of lap</label>
            <input type="number" id="num_lap" name="num_lap" value="1" />
          </div>
          <img src={Tree} class="tree" />

          <table id="results">
            <thead>
              <tr>
                <th>Results</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st</td>
                <td class="result horse1"></td>
              </tr>
              <tr>
                <td>2nd</td>
                <td class="result horse2"></td>
              </tr>
              <tr>
                <td>3rd</td>
                <td class="result horse3"></td>
              </tr>
              <tr>
                <td>4th</td>
                <td class="result horse4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Horse;
