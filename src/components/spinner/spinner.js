import React, {Component} from 'react';

import './spinner.css';

export default class Spinner extends Component {

  render() {
    return(
        <div className="lds-css ng-scope">
          <div className="lds-double-ring">
            <div>
            </div>
            <div>
            </div>
            <div>
              <div>
              </div>
            </div>
            <div>
              <div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}