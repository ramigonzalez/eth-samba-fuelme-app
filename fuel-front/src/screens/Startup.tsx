import { Button } from "../components/Button"
import { BrutalCard } from "../components/Card"
const StartupList = ({ isST }: { isST?: boolean }) => {
  const startups = [
    {
      name: "My awesome corporation",
      id: "my awesomeID",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum augue eros, sit amet faucibus diam egestas sit amet. Mauris ligula arcu, rhoncus a cursus sed, porttitor vel felis. Aenean interdum ac risus sed pretium. Duis risus dui, lacinia non neque tempus, finibus consequat nunc. Aliquam erat volutpat. Nullam non finibus purus. Maecenas facilisis justo risus, eget pharetra ligula dignissim eget. Phasellus porta turpis lorem, eu rhoncus sapien ullamcorper eu. Morbi in ante tellus. Suspendisse vel est ac dolor bibendum sodales vitae eget felis. Vivamus a justo nisi. Mauris nec neque quis velit porta bibendum et volutpat nulla.      ",
      imgSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FGHMFCBDIVHB3N6PSB7GNB53NM.png"
    },
    {
      name: "My awesome corporation",
      id: "my awesomeID",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum augue eros, sit amet faucibus diam egestas sit amet. Mauris ligula arcu, rhoncus a cursus sed, porttitor vel felis. Aenean interdum ac risus sed pretium. Duis risus dui, lacinia non neque tempus, finibus consequat nunc. Aliquam erat volutpat. Nullam non finibus purus. Maecenas facilisis justo risus, eget pharetra ligula dignissim eget. Phasellus porta turpis lorem, eu rhoncus sapien ullamcorper eu. Morbi in ante tellus. Suspendisse vel est ac dolor bibendum sodales vitae eget felis. Vivamus a justo nisi. Mauris nec neque quis velit porta bibendum et volutpat nulla.      ",
      imgSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FGHMFCBDIVHB3N6PSB7GNB53NM.png"
    }, {
      name: "My awesome corporation",
      id: "my awesomeID",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum augue eros, sit amet faucibus diam egestas sit amet. Mauris ligula arcu, rhoncus a cursus sed, porttitor vel felis. Aenean interdum ac risus sed pretium. Duis risus dui, lacinia non neque tempus, finibus consequat nunc. Aliquam erat volutpat. Nullam non finibus purus. Maecenas facilisis justo risus, eget pharetra ligula dignissim eget. Phasellus porta turpis lorem, eu rhoncus sapien ullamcorper eu. Morbi in ante tellus. Suspendisse vel est ac dolor bibendum sodales vitae eget felis. Vivamus a justo nisi. Mauris nec neque quis velit porta bibendum et volutpat nulla.      ",
      imgSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FGHMFCBDIVHB3N6PSB7GNB53NM.png"
    },
    {
      name: "My awesome corporation",
      id: "my awesomeID",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum augue eros, sit amet faucibus diam egestas sit amet. Mauris ligula arcu, rhoncus a cursus sed, porttitor vel felis. Aenean interdum ac risus sed pretium. Duis risus dui, lacinia non neque tempus, finibus consequat nunc. Aliquam erat volutpat. Nullam non finibus purus. Maecenas facilisis justo risus, eget pharetra ligula dignissim eget. Phasellus porta turpis lorem, eu rhoncus sapien ullamcorper eu. Morbi in ante tellus. Suspendisse vel est ac dolor bibendum sodales vitae eget felis. Vivamus a justo nisi. Mauris nec neque quis velit porta bibendum et volutpat nulla.      ",
      imgSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FGHMFCBDIVHB3N6PSB7GNB53NM.png"
    }
    , {
      name: "My awesome corporation",
      id: "my awesomeID",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum augue eros, sit amet faucibus diam egestas sit amet. Mauris ligula arcu, rhoncus a cursus sed, porttitor vel felis. Aenean interdum ac risus sed pretium. Duis risus dui, lacinia non neque tempus, finibus consequat nunc. Aliquam erat volutpat. Nullam non finibus purus. Maecenas facilisis justo risus, eget pharetra ligula dignissim eget. Phasellus porta turpis lorem, eu rhoncus sapien ullamcorper eu. Morbi in ante tellus. Suspendisse vel est ac dolor bibendum sodales vitae eget felis. Vivamus a justo nisi. Mauris nec neque quis velit porta bibendum et volutpat nulla.      ",
      imgSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FGHMFCBDIVHB3N6PSB7GNB53NM.png"
    }
  ]
  const backStartup = (id: string) => {
    // TOOD some magic on eth
  }
  return <div style={{
    display: "grid",
    gap: 40,
    height: 400,
  }}> {startups.map(startup => <BrutalCard style={{
    background: "white",
  }}>
    <div style={{
      display: "grid",
      gridTemplateColumns: "175px 1fr 40px 50px",
    }}>
      <div style={{
        borderRadius: 20,
        overflow: "hidden",
        borderColor: "black",
        height: 150,
        width: 150,
        border: "4px black solid"
      }}>
        <img alt={`${startup.name}-profile`} src={startup.imgSrc} style={{
          height: 150,
          width: 150
        }} />
      </div>
      <div style={
        {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }
      }>
        <h1 className='poppins text-lg md:text-xl '>
          {startup.name}
        </h1>
        <p className='poppins text-lg md:text-xl '>
          {startup.description}
        </p>
      </div>
      <div style={{
        display: "grid",
        placeItems: "center"
      }}>
        {isST ? <h4 className='poppins text-xl'>
          100Eth
        </h4> :
          <Button onClick={() => backStartup(startup.id)} text="FuelMe" />
        }
      </div>
    </div>
  </BrutalCard>)}
  </div>
}

export const Startup = () => {

  return (
    <div style={{
      padding: 25,
      gap: 40,
      display: "grid",
    }}>
      <div>
        <BrutalCard style={{ background: "#13FEA8", overflow: "scroll" }}>
          <h4 className='poppins text-2xl'>
            Founded startups
          </h4>
          <StartupList isST />
        </BrutalCard>
      </div>
      <div>

        <BrutalCard style={{ background: "#FFD9FF", overflow: "scroll" }}>
          <h4 className='poppins text-2xl'>
            Find your next project
          </h4>
          <StartupList />
        </BrutalCard>
      </div>
    </div>
  )
}
