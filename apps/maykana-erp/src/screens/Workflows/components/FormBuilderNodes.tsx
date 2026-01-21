import { Handle, Position } from 'reactflow';

export const ProcessStartNode = ({ data }: any) => (
  <div style={{ width: '380px', height: '64px', padding: '0 18px', background: '#E8F7FF', borderRadius: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}>
    <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', flexShrink: 0 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#41D1FE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    </div>
    <span style={{ fontSize: '15px', fontWeight: 700, color: '#41D1FE', textAlign: 'right', flex: 1 }}>{data.label}</span>
  </div>
);

export const ProcessActiveNode = ({ data }: any) => (
  <div style={{ width: '380px', height: '64px', padding: '0 18px', background: '#0A4847', borderRadius: '14px', boxShadow: '0 2px 6px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}>
    <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
    <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', flexShrink: 0 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
    </div>
    <span style={{ fontSize: '15px', fontWeight: 700, color: '#FFFFFF', textAlign: 'right', flex: 1 }}>{data.label}</span>
  </div>
);

export const ProcessBranchNode = ({ data }: any) => (
  <div style={{ width: '320px', height: '60px', padding: '0 16px', background: '#E8EDED', borderRadius: '14px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px', fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}>
    <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
    <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', flexShrink: 0 }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5A7A79" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
    </div>
    <span style={{ fontSize: '14px', fontWeight: 700, color: '#5A7A79', textAlign: 'right', flex: 1 }}>{data.label}</span>
  </div>
);

export const ProcessEndNode = ({ data }: any) => (
  <div style={{ width: '380px', height: '64px', padding: '0 18px', background: '#E8FAF3', borderRadius: '14px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '12px', fontFamily: "'IBM Plex Sans Arabic', Helvetica", direction: 'rtl' }}>
    <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', background: '#2CC28D', borderRadius: '50%', flexShrink: 0 }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    </div>
    <span style={{ fontSize: '15px', fontWeight: 700, color: '#2CC28D', textAlign: 'right', flex: 1 }}>{data.label}</span>
  </div>
);

export const formBuilderNodeTypes = {
  processStart: ProcessStartNode,
  processActive: ProcessActiveNode,
  processBranch: ProcessBranchNode,
  processEnd: ProcessEndNode,
};
