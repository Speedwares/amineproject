import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class ReactTableComponent extends Component {
  constructor() {
    super()
    this.TUIpinger2 = this.TUIpinger2.bind(this);
          this.state = {
    data: [{
               asksize: '',
               askvalue: '',
               bidsize: '',
               bidvalue: '',
               strike: '',
                }]
  }

}


componentWillMount() {
  this.TUIsetOpen()

}

UpdateStatus = (soemhf) => {
  console.log(soemhf)
}


TUIsetOpen = async ()=>{
        this.ctd = new WebSocket("wss://tasty.dxfeed.com/live/cometd");
        var cometds =
            '[{"ext":{"com.devexperts.auth.AuthToken":"dGFzdHksbGl2ZSwsMTU2MDIxNTYyOSwxNTYwMTI5MjI5LFUwMDAwNjEyODkz.erP-jl5BtmNUI_BsDjLXvTAbCKXB4NqcW8bP6jZKgwI"},"id":"1","version":"1.0","minimumVersion":"1.0","channel":"/meta/handshake","supportedConnectionTypes":["websocket","long-polling","callback-polling"],"advice":{"timeout":60000,"interval":0}}]';
            this.ctd.onclose = () => {
                console.log("closed.");
                this.UpdateStatus("Offline");
            }; 
      
            this.ctd.onopen = () => { 
            this.UpdateStatus("Online");
          
            
            this.ctd.send(cometds);
            setTimeout(function() {
                if (localStorage.getItem("livenow") !== null) {
                    document.getElementById(
                        "symbol"
                    ).value = this.state.sessionTicker; 
                }
            }, 500);

            this.ctd.onmessage = message => {
                var json = JSON.parse(message.data);
                console.log(json)
               

                if (
                    json &&
                    json[0] &&
                    json[0].clientId
                ) {
                    

                    if (json) {
                      console.log(json)
                      // eslint-disable-next-line
                        if (json[0].channel == "/meta/handshake") {
                          
                            if (json[0].error){alert(json[0].error);}else{
                            
                            var cometd1 =
                                '[{"id":"2","channel":"/service/sub","data":{"reset":true},"clientId":"' +
                                json[0].clientId +
                                '"}]'; 
                            var cometd2 =
                                '[{"id":"3","channel":"/meta/connect","connectionType":"websocket","advice":{"timeout":0},"clientId":"' +
                                json[0].clientId +
                                '"}]'; 
                            var cometd3 =
                                '[{"id":"4","channel":"/meta/connect","connectionType":"websocket","clientId":"' +
                                json[0].clientId +
                                '"}]';

                                this.ctd.send(cometd1);
                                this.ctd.send(cometd2);
                                this.ctd.send(cometd3);
                            window.vid = 4;
                            // eslint-disable-next-line
                            var pinger =
                                '[{"id":"' +
                                window.vid +
                                '","channel":"/meta/connect","connectionType":"websocket","clientId":"' +
                                json[0].clientId +
                                '"}]';

                            this.TUIpinger(json[0].clientId, this.ctd);
                            this.TUIpinger2(json[0].clientId, this.ctd);
                            console.log('cada')
                      
                        
                       
                        }

                        }

                        if (json[0].error) { alert("handshake denied.");}


                    }
                }
            }; 
        };
    }
subscribeStock = (symbol, ctd) => {
        var AddTicker =
            '[{"id":"' +
            window.vid +
            '","channel":"/service/sub","data":{"add":{"Trade":["' +
            symbol +
            '"],"Quote":["' +
            symbol +
            '"],"Summary":["' +
            symbol +
            '"],"Profile":["' +
            symbol +
            '"]}},"clientId":"' +
            sessionStorage.getItem("clientId") +
            '"}]';

       ctd.send(AddTicker);

       ctd.onmessage = function(message) {
            var json = JSON.parse(message.data);
            console.log(json)
       }


    }
    TUIpinger2 = async (jsonClientId, ctd) =>{
       var data = [];
      var AddTicker2 =
            '[{"id":"' +
            window.vid +
            '","channel":"/service/sub","data":{"add":{"Summary":[".TSLA190607P75",".TSLA1190621P1",".TSLA190621C10",".TSLA190621P10",".TSLA190621C20",".TSLA190621P20",".TSLA190621C25",".TSLA190621P25",".TSLA190621C30",".TSLA190621P30",".TSLA190621C35",".TSLA190621P35",".TSLA190621C40",".TSLA190621P40",".TSLA190621C45",".TSLA190621P45",".TSLA190621C50",".TSLA190621P50",".TSLA190621C55",".TSLA190621P55",".TSLA190621C60",".TSLA190621P60",".TSLA190621C65",".TSLA190621P65",".TSLA190621C70",".TSLA190621P70",".TSLA190621C75",".TSLA190621P75",".TSLA190621C80",".TSLA190621P80",".TSLA190621C85",".TSLA190621P85",".TSLA190621C90",".TSLA190621P90",".TSLA190621C95",".TSLA190621P95",".TSLA190621C165",".TSLA190621P165",".TSLA190621C170",".TSLA190621P170",".TSLA190621C175",".TSLA190621P175",".TSLA190621C180",".TSLA190621P180",".TSLA190621C185",".TSLA190621P185",".TSLA190621C190",".TSLA190621P190",".TSLA190621C195",".TSLA190621P195",".TSLA190621C200",".TSLA190621P200",".TSLA190621C205",".TSLA190621P205",".TSLA190621C207.5",".TSLA190621P207.5",".TSLA190621C210",".TSLA190621P210",".TSLA190621C212.5",".TSLA190621P212.5",".TSLA190621C215",".TSLA190621P215",".TSLA190621C217.5",".TSLA190621P217.5",".TSLA190621C220",".TSLA190621P220",".TSLA190621C222.5",".TSLA190621P222.5",".TSLA190621C225",".TSLA190621P225"],"Quote":[".TSLA190607P75",".TSLA1190621P1",".TSLA190621C10",".TSLA190621P10",".TSLA190621C20",".TSLA190621P20",".TSLA190621C25",".TSLA190621P25",".TSLA190621C30",".TSLA190621P30",".TSLA190621C35",".TSLA190621P35",".TSLA190621C40",".TSLA190621P40",".TSLA190621C45",".TSLA190621P45",".TSLA190621C50",".TSLA190621P50",".TSLA190621C55",".TSLA190621P55",".TSLA190621C60",".TSLA190621P60",".TSLA190621C65",".TSLA190621P65",".TSLA190621C70",".TSLA190621P70",".TSLA190621C75",".TSLA190621P75",".TSLA190621C80",".TSLA190621P80",".TSLA190621C85",".TSLA190621P85",".TSLA190621C90",".TSLA190621P90",".TSLA190621C95",".TSLA190621P95",".TSLA190621C165",".TSLA190621P165",".TSLA190621C170",".TSLA190621P170",".TSLA190621C175",".TSLA190621P175",".TSLA190621C180",".TSLA190621P180",".TSLA190621C185",".TSLA190621P185",".TSLA190621C190",".TSLA190621P190",".TSLA190621C195",".TSLA190621P195",".TSLA190621C200",".TSLA190621P200",".TSLA190621C205",".TSLA190621P205",".TSLA190621C207.5",".TSLA190621P207.5",".TSLA190621C210",".TSLA190621P210",".TSLA190621C212.5",".TSLA190621P212.5",".TSLA190621C215",".TSLA190621P215",".TSLA190621C217.5",".TSLA190621P217.5",".TSLA190621C220",".TSLA190621P220",".TSLA190621C222.5",".TSLA190621P222.5",".TSLA190621C225",".TSLA190621P225"],"Greeks":[".TSLA190607P75",".TSLA1190621P1",".TSLA190621C10",".TSLA190621P10",".TSLA190621C20",".TSLA190621P20",".TSLA190621C25",".TSLA190621P25",".TSLA190621C30",".TSLA190621P30",".TSLA190621C35",".TSLA190621P35",".TSLA190621C40",".TSLA190621P40",".TSLA190621C45",".TSLA190621P45",".TSLA190621C50",".TSLA190621P50",".TSLA190621C55",".TSLA190621P55",".TSLA190621C60",".TSLA190621P60",".TSLA190621C65",".TSLA190621P65",".TSLA190621C70",".TSLA190621P70",".TSLA190621C75",".TSLA190621P75",".TSLA190621C80",".TSLA190621P80",".TSLA190621C85",".TSLA190621P85",".TSLA190621C90",".TSLA190621P90",".TSLA190621C95",".TSLA190621P95",".TSLA190621C165",".TSLA190621P165",".TSLA190621C170",".TSLA190621P170",".TSLA190621C175",".TSLA190621P175",".TSLA190621C180",".TSLA190621P180",".TSLA190621C185",".TSLA190621P185",".TSLA190621C190",".TSLA190621P190",".TSLA190621C195",".TSLA190621P195",".TSLA190621C200",".TSLA190621P200",".TSLA190621C205",".TSLA190621P205",".TSLA190621C207.5",".TSLA190621P207.5",".TSLA190621C210",".TSLA190621P210",".TSLA190621C212.5",".TSLA190621P212.5",".TSLA190621C215",".TSLA190621P215",".TSLA190621C217.5",".TSLA190621P217.5",".TSLA190621C220",".TSLA190621P220",".TSLA190621C222.5",".TSLA190621P222.5",".TSLA190621C225",".TSLA190621P225"]}},"clientId":"' +
            jsonClientId +
            '"}]';

       ctd.send(AddTicker2);



       
       var num = 0;
       var arrnum = 0;
       var firstdata = 5;
       var seconddata = 6;
       var thirddata = 9;
       var fourthdata = 10;
       var strikedata = 0;
       var obj = {}
       var self = this;
      

       ctd.onmessage = await function(message) {
            var json = JSON.parse(message.data);
            console.log(json)
            num++;
            if (num > 3){
            if ( typeof(json[0].data) != "undefined" && json[0].data[0][0] =='Quote'){
              console.log(json[0].data[1])
            json[0].data[1].forEach((value, key)=>{
              if(arrnum == strikedata){
                if(!!~value.indexOf("P")){
                  var res = value.split("P");
                  obj.strike = res[1];

                }

                 if(!!~value.indexOf("C")){
                  var res2 = value.split("C");
                  obj.strike = res2[1];
                  strikedata = strikedata + 12;

                }
              }
              if(arrnum == firstdata){
                obj.bidvalue = value;
                firstdata = firstdata + 12
              }

              if(arrnum == seconddata){
                obj.bidsize = value;
                seconddata = seconddata + 12;
              }

              if(arrnum == thirddata){
                obj.askvalue = value;
                thirddata = thirddata + 12;
              }

              if(arrnum == fourthdata){
                obj.asksize = value;
                fourthdata = fourthdata + 12;
                data.push(obj)
                obj = {};
              }

              arrnum++;

            })
            // var Carray = json[0].data[1];
            // json[0].data[1] ; 
            // $('.bidvalue').html(json[0].data[1][5]);
            // $('.bsize').html(json[0].data[1][6]);
            // $('.askvalue').html(json[0].data[1][9]);
            // $('.asize').html(json[0].data[1][10]); 
            console.log('cool')
             console.log(data)
             self.setState({
                 data: data
             })
      
      
        } 
         if ( typeof(json[0].data) != "undefined" && json[0].data[0][0] =='Greeks'){ 
          console.log('najh')
            // json[0].data[1] ; 
            // $('.deltavalue').html(json[0].data[1][6]);
            // $('.thetavalue').html(json[0].data[1][8]);
            // $('.ivvalue').html(json[0].data[1][5]);
         } 
            }
            
    
       } 
var data2 = [
{bidvalue: "Z", bidsize: 18.85, askvalue: "B", asksize: 19.45},
{bidvalue: "C", bidsize: 153.9, askvalue: "C", asksize: 155.1},
{bidvalue: "C", bidsize: 26, askvalue: "B", asksize: 26.85},
{bidvalue: "Z", bidsize: 5.9, askvalue: "Q", asksize: 6.1}]


   
      console.log(data2)


    

  
    }

    TUIpinger = (jsonClientId, ctd) => {
        console.log("pinger");
        console.log(jsonClientId)

        setInterval(function() {
            ctd.send(
                '[{"id":"' +
                window.vid +
                '","channel":"/meta/connect","connectionType":"websocket","clientId":"' +
                jsonClientId +
                '"}]'
            );
       //       var AddTicker =
       //      '[{"id":"' +
       //      window.vid +
       //      '","channel":"/service/sub","data":{"add":{"Trade":["FB"],"Quote":["FB"],"Summary":["FB"],"Profile":["FB"]}},"clientId":"' +
       //      jsonClientId +
       //      '"}]';

       // ctd.send(AddTicker);

       ctd.onmessage = function(message) {
            var json = JSON.parse(message.data);
            console.log(json)
       }

        }, 29000);
        
    }

  render() {
    const {data} = this.state
    return (
      <div style={{ padding: '50px' }}>
        <ReactTable
          minRows={0}
          data={data}      
          showPagination={true}
          columns={[
 {
    Header: 'DELTA',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
   {
    Header: 'OPENINT',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'VOLUME',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
  {
    Header: 'ASKSIZE',
    accessor: 'asksize',
    Cell: row => (
          <div
            style={{
             color: row.value > row.original
                ? '#4C9A2A'
                : row.value < row.original
                ? '#f44336'
                : '#000000',
      
        }}>
          {row.value}
          </div>
        )
  },
  {
    Header: 'ASK',
    accessor: 'askvalue',
     Cell: row => (
          <div>
          {row.value}
          </div>
        )
  },
    {
    Header: 'BID',
    accessor: 'bidvalue',
      Cell: row => (
          <div>
          {row.value}
          </div>
        )
  },
  {
    Header: 'BIDSIZE',
    accessor: 'bidsize',
    Cell: row => (
          <div>
          {row.value}
          </div>
        )
  },
    {
    Header: 'STRIKE',
    headerStyle: { whiteSpace: 'unset' },
    style: { whiteSpace: 'unset' },
    maxWidth: 150,
  },
]}
        />
      </div>
    );
  }
}

export default ReactTableComponent
