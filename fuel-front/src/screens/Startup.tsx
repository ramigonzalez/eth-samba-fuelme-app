import { useState } from "react"
import { Button } from "../components/Button"
import { BrutalCard } from "../components/Card"
const StartupList = (props: any) => {
  const { isST } = props;
  const { selectedList, setSelectedList } = props
  const startups = [
    {
      id: 1,
      name: "My awesome corporation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum augue eros, sit amet faucibus diam egestas sit amet. Mauris ligula arcu, rhoncus a cursus sed, porttitor vel felis. Aenean interdum ac risus sed pretium. Duis risus dui, lacinia non neque tempus, finibus consequat nunc. Aliquam erat volutpat. Nullam non finibus purus. Maecenas facilisis justo risus, eget pharetra ligula dignissim eget. Phasellus porta turpis lorem, eu rhoncus sapien ullamcorper eu. Morbi in ante tellus. Suspendisse vel est ac dolor bibendum sodales vitae eget felis. Vivamus a justo nisi. Mauris nec neque quis velit porta bibendum et volutpat nulla.      ",
      imgSrc: "https://aromatic-acai-5c1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F87f2ecf5-aef7-44c8-a05e-9266c9669d5d%2F2d776a1bbf574c5fad8482afd174efde.png?id=c9bd21f5-b438-4acf-8800-2fee616395f6&table=block&spaceId=b786dbf2-7ea6-4527-a9c6-0c3126f3c670&width=2000&userId=&cache=v2"
    }, {
      id: 2,
      name: "My awesome corporation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum augue eros, sit amet faucibus diam egestas sit amet. Mauris ligula arcu, rhoncus a cursus sed, porttitor vel felis. Aenean interdum ac risus sed pretium. Duis risus dui, lacinia non neque tempus, finibus consequat nunc. Aliquam erat volutpat. Nullam non finibus purus. Maecenas facilisis justo risus, eget pharetra ligula dignissim eget. Phasellus porta turpis lorem, eu rhoncus sapien ullamcorper eu. Morbi in ante tellus. Suspendisse vel est ac dolor bibendum sodales vitae eget felis. Vivamus a justo nisi. Mauris nec neque quis velit porta bibendum et volutpat nulla.      ",
      imgSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FGHMFCBDIVHB3N6PSB7GNB53NM.png"
    }, {
      id: 3,
      name: "My awesome corporation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum augue eros, sit amet faucibus diam egestas sit amet. Mauris ligula arcu, rhoncus a cursus sed, porttitor vel felis. Aenean interdum ac risus sed pretium. Duis risus dui, lacinia non neque tempus, finibus consequat nunc. Aliquam erat volutpat. Nullam non finibus purus. Maecenas facilisis justo risus, eget pharetra ligula dignissim eget. Phasellus porta turpis lorem, eu rhoncus sapien ullamcorper eu. Morbi in ante tellus. Suspendisse vel est ac dolor bibendum sodales vitae eget felis. Vivamus a justo nisi. Mauris nec neque quis velit porta bibendum et volutpat nulla.      ",
      imgSrc: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/FGHMFCBDIVHB3N6PSB7GNB53NM.png"
    }
  ]
  const backStartup = (id: number) => {
    // TOOD some magic on eth
  }
  return <div style={{
    display: "grid",
    gap: 40,
    height: 400,
  }}> {startups.map(startup => <BrutalCard style={{
    background: !isST && (selectedList ?? []).includes(+startup.id) ? "#FFC900" : "white",
  }}>
    <div style={{
      display: "grid",
      gridTemplateColumns: "175px 1fr 40px 50px",
    }} onClick={() => {
      if (!isST) setSelectedList((list: Array<number>) => (list ?? []).includes(startup.id) ? [...(list ?? []).filter(oldId => oldId !== startup.id)] : [...(list ?? []), startup.id])
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
          <Button onClick={() => backStartup(startup.id)} text={(selectedList?? []).length ? "Bulk FuelMe" : "FuelMe"} />
        }
      </div>
    </div>
  </BrutalCard>)}
  </div>
}

export const Startup = () => {
  const [selectedList, setSelectedList] = useState([]);

  return (
    <div style={{
      padding: 25,
      gap: 40,
      display: "grid",
    }}>
      <div>
        <h4 className='poppins text-2xl'>
          Founded startups
        </h4>
        <BrutalCard style={{ background: "#13FEA8", overflow: "scroll" }}>
          <StartupList isST />
        </BrutalCard>
      </div>
      <div>

        <h4 className='poppins text-2xl'>
          Find your next project
        </h4>
        <BrutalCard style={{ background: "#FFD9FF", overflow: "scroll" }}>
          <StartupList {...{ selectedList, setSelectedList }} />
        </BrutalCard>
      </div>
    </div>
  )
}
