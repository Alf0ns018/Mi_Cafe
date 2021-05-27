import React, { Component } from 'react';

import './pdf.css'

class Pdf extends Component {
    render() {
        return (
                            <div style={{position: 'absolute' , width: '100%', height: '100%'}}>
                            <object
                                data={require('../Docs/menu.pdf')}
                                type="application/pdf"
                                width="100%"
                                height= "100%"
                                >
                            </object>
                        
                       </div>
        

        )
    }
}
export default Pdf;