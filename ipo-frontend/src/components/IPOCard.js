import React from 'react';
import './IPOCard.css';

const statusStyles = {
  ongoing: {
    background: '#e6f4ea', color: '#2ecc71', border: '1px solid #2ecc71', borderRadius: '16px', padding: '6px 16px', fontWeight: 600, fontSize: '0.95em', display: 'inline-block', minWidth: 80, textAlign: 'center'
  },
  upcoming: {
    background: '#fffbe6', color: '#f1c40f', border: '1px solid #f1c40f', borderRadius: '16px', padding: '6px 16px', fontWeight: 600, fontSize: '0.95em', display: 'inline-block', minWidth: 80, textAlign: 'center'
  },
  listed: {
    background: '#ffeaea', color: '#e74c3c', border: '1px solid #e74c3c', borderRadius: '16px', padding: '6px 16px', fontWeight: 600, fontSize: '0.95em', display: 'inline-block', minWidth: 80, textAlign: 'center'
  },
  default: {
    background: '#f0f0f0', color: '#888', border: '1px solid #ccc', borderRadius: '16px', padding: '6px 16px', fontWeight: 600, fontSize: '0.95em', display: 'inline-block', minWidth: 80, textAlign: 'center'
  }
};

const IPOCard = ({ ipo }) => {
  let badgeStyle = statusStyles[ipo.status] || statusStyles.default;
  let badgeText = ipo.status === 'ongoing' ? 'Ongoing' : ipo.status === 'upcoming' ? 'Comming' : ipo.status === 'listed' ? 'New Listed' : ipo.status;

  return (
    <div className="ipo-card">
      <div className="ipo-header">
        {ipo.logo && <img src={ipo.logo} alt={`${ipo.company_name} logo`} className="ipo-logo" />}
        <h4 className="ipo-title">{ipo.company_name}</h4>
      </div>
      <div className="ipo-body">
        <div className="ipo-row-block-group">
          <div className="ipo-row-block"><span>Price Band</span><span className="ipo-value">{ipo.price_band || 'Not Issued'}</span></div>
          <div className="ipo-row-block"><span>Open</span><span className="ipo-value">{ipo.open_date || 'Not Issued'}</span></div>
          <div className="ipo-row-block"><span>Close</span><span className="ipo-value">{ipo.close_date || 'Not Issued'}</span></div>
        </div>
        <div className="ipo-row-block-group">
          <div className="ipo-row-block"><span>Issue Size</span><span className="ipo-value">{ipo.issue_size}</span></div>
          <div className="ipo-row-block"><span>Issue Type</span><span className="ipo-value">{ipo.issue_type}</span></div>
          <div className="ipo-row-block"><span>Listing Date</span><span className="ipo-value">{ipo.listing_date || 'Not Issued'}</span></div>
        </div>
        <div className="ipo-row-block-group">
          <div className="ipo-row-block"><span>Status</span><span className="ipo-value" style={badgeStyle}>{badgeText}</span></div>
          <div className="ipo-row-block ipo-row-buttons">
            <span>Documents</span>
            <span style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
              {ipo.rhp_pdf && <a className="ipo-btn rhp" href={ipo.rhp_pdf} target="_blank" rel="noreferrer">RHP</a>}
              {ipo.drhp_pdf && <a className="ipo-btn drhp" href={ipo.drhp_pdf} target="_blank" rel="noreferrer">DRHP</a>}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPOCard;