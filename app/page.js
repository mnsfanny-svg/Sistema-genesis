'use client';
import { useState } from 'react';

export default function Page() {
  const [logged, setLogged] = useState(false);
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const login = () => {
    if (id.trim() && pass.trim()) setLogged(true);
    else alert('Pon tu ID y contraseña');
  };

  if (!logged) {
    return (
      <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#0A0A0A', padding:20}}>
        <div style={{background:'#151515', border:'1px solid #C9A96E', borderRadius:16, padding:24, width:'100%', maxWidth:360}}>
          <h1 style={{color:'#C9A96E', textAlign:'center', margin:'0 0 8px', fontSize:22, fontWeight:800}}>SISTEMA GÉNESIS</h1>
          <p style={{textAlign:'center', color:'#aaa', fontSize:13, margin:'0 0 20px'}}>Portal Privado - 95 Socias</p>
          <label style={{color:'#C9A96E', fontSize:12}}>ID de Socia</label>
          <input value={id} onChange={e=>setId(e.target.value)} placeholder="MX-01571552" style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #333', background:'#0A0A0A', color:'#fff', margin:'6px 0 12px'}} />
          <label style={{color:'#C9A96E', fontSize:12}}>Contraseña</label>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} placeholder="1234" style={{width:'100%', padding:12, borderRadius:8, border:'1px solid #333', background:'#0A0A0A', color:'#fff', margin:'6px 0 20px'}} />
          <button onClick={login} style={{width:'100%', padding:12, borderRadius:8, background:'#C9A96E', color:'#000', fontWeight:800, border:'none'}}>ENTRAR</button>
          <p style={{color:'#666', fontSize:11, textAlign:'center', marginTop:12}}>Prueba: MX-01571552 / 1234</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight:'100vh', background:'#0A0A0A', padding:20, color:'#fff'}}>
      <h1 style={{color:'#C9A96E'}}>¡Bienvenida Maribel! 🎉</h1>
      <p>Tu DNS ya está configurado: A 76.76.21.21 y CNAME www cname.vercel-dns.com</p>
      <div style={{background:'#151515', borderRadius:12, padding:16, marginTop:16, border:'1px solid #333'}}>
        <h3 style={{color:'#C9A96E', margin:0}}>Ecosistema Genesis</h3>
        <p style={{fontSize:13, color:'#aaa'}}>95 socias activas - Portal en construcción</p>
        <p style={{fontSize:12, marginTop:12}}>Tu dominio sistemagénesis.com ya apunta a Vercel. Ahora solo falta conectar Supabase.</p>
      </div>
      <button onClick={()=>setLogged(false)} style={{marginTop:20, background:'transparent', border:'1px solid #C9A96E', color:'#C9A96E', padding:10, borderRadius:8}}>Cerrar sesión</button>
    </div>
  );
}
