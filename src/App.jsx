import './App.css';
import Card from './Components/Card';

const App = () => {

  return (
    <div className="App">
      <h1 className='Title'>League of Legends Worlds 2024 Qualifiers</h1>
      <div className='TeamContainer'>
        <Card name='100 Thieves' region='North America' wiki='https://lol.fandom.com/wiki/100_Thieves'/>
        <Card name='Billibili Gaming' region='China' wiki='https://lol.fandom.com/wiki/Bilibili_Gaming'/>
        <Card name='Dplus KIA' region='Korea' wiki='https://lol.fandom.com/wiki/Dplus_KIA'/>
        <Card name='FlyQuest' region='North America' wiki='https://lol.fandom.com/wiki/FlyQuest'/>
        <Card name='Fnatic' region='EMEA' wiki='https://lol.fandom.com/wiki/Fnatic'/>
        <Card name='Fukuoka SoftBank HAWKS gaming' region='Asia-Pacific' wiki='https://lol.fandom.com/wiki/Fukuoka_SoftBank_HAWKS_gaming'/>
        <Card name='G2 Esports' region='EMEA' wiki='https://lol.fandom.com/wiki/G2_Esports'/>
        <Card name='GAM Esports' region='Vietnam' wiki='https://lol.fandom.com/wiki/GAM_Esports'/>
        <Card name='Gen.G' region='Korea' wiki='https://lol.fandom.com/wiki/Gen.G'/>
        <Card name='Hanwha Life Esports' region='Korea' wiki='https://lol.fandom.com/wiki/Hanwha_Life_Esports'/>
        <Card name='LNG Esports' region='China'wiki='https://lol.fandom.com/wiki/LNG_Esports'/>
        <Card name='MAD Lions KOI' region='EMEA' wiki='https://lol.fandom.com/wiki/MAD_Lions_KOI'/>
        <Card name='paiN Gaming' region='Brazil' wiki='https://lol.fandom.com/wiki/PaiN_Gaming'/>
        <Card name='PSG Talon' region='Asia-Pacific' wiki='https://lol.fandom.com/wiki/PSG_Talon'/>
        <Card name='Movistar R7' region='Latin America' wiki='https://lol.fandom.com/wiki/Movistar_R7'/>
        <Card name='T1' region='Korea' wiki='https://lol.fandom.com/wiki/T1'/>
        <Card name='Team Liquid' region='North America' wiki='https://lol.fandom.com/wiki/Team_Liquid'/>
        <Card name='Top Esports' region='China' wiki='https://lol.fandom.com/wiki/Top_Esports'/>
        <Card name='Vikings Esports' region='Vietnam' wiki='https://lol.fandom.com/wiki/Vikings_Esports_(2023_Vietnamese_Team)'/>
        <Card name='Weibo Gaming' region='China' wiki='https://lol.fandom.com/wiki/Weibo_Gaming'/>
      </div>
    </div>
  )
}

export default App
