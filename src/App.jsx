import { useState } from "react";
import { companyConfig } from "./config";

const products = [
  { id:"01", name:"BOPP Bag", image:"/products/bopp-bag.svg", summary:"Presentation-focused laminated carry-bag solutions.", details:"BOPP bags can support custom printing and glossy or matte laminated finishes for retail, packaging and branding requirements." },
  { id:"02", name:"D Cut Bag", image:"/products/d-cut-bag.svg", summary:"Convenient die-cut handle format for everyday carrying.", details:"D Cut bags provide a practical handle opening and can be customized for retail and general business packaging requirements." },
  { id:"03", name:"Handle Bag", image:"/products/handle-bag.svg", summary:"Handled carry bags for convenient movement and presentation.", details:"Handle bags provide an integrated carrying area and can be customized for a range of retail and business packaging needs." },
  { id:"04", name:"W Cut Bag", image:"/products/w-cut-bag.svg", summary:"Flexible carry-bag format for varied business requirements.", details:"W Cut bags provide a practical W-style handle opening and can be considered for a range of carrying and packaging applications." },
  { id:"05", name:"Box Bag", image:"/products/box-bag.svg", summary:"Structured bag format with useful carrying capacity.", details:"Box bags provide a more structured base and useful volume for carrying packaged goods and business merchandise." },
  { id:"06", name:"Stitching Bag", image:"/products/stitching-bag.svg", summary:"Stitched construction for practical handling requirements.", details:"Stitching bags use stitched construction and can be considered where a reinforced bag format is required." },
  { id:"07", name:"Canvas Jute Bag", image:"/products/canvas-jute-bag.svg", summary:"Natural-fabric option for reusable and branded applications.", details:"Canvas and jute bags offer a natural presentation and can be considered for promotional, retail and general carrying needs." },
  { id:"08", name:"U Cut Bag", image:"/products/d-cut-bag.svg", summary:"U-cut carry-bag format for customized packaging requirements.", details:"U Cut bags are part of the company's wider carry-bag offering and can be discussed for customized business requirements." }
];;