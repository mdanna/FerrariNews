const data = {
  teasers: [
    {
      image: 'imageteaser1.png',
      date: '2023.01.01',
      number: '19',
      text: "777 Hypercar is a 730-HP racing experience based at Monza...",
    }, {
      image: 'imageteaser2.png',
      date: '2022.12.01',
      number: '18',
      text: "Bosch taps IBM quantum computers in hunt for new EV materials...",
    }, {
      image: 'imageteaser3.png',
      date: '2022.11.01',
      number: '17',
      text: "Starlink satellite internet for moving vehicles launches in December...",
    }, {
      image: 'imageteaser4.png',
      date: '2022.10.01',
      number: '16',
      text: "Audi Urban Purifier - The fine dust filter for Electric Vehicles...",
    }, {
      image: 'imageteaser5.png',
      date: '2022.09.01',
      number: '15',
      text: "Multimatic's new TrueActive shocks could make sway bars a thing of the past...",
    }],
  newsletters: {
    19: {
      automotive: [{
        text: "777 Hypercar is a 730-HP racing experience based at Monza",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-001.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }, {
        text: "Massive traffic experiment pits machine learning against 'phantom' jams",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-002.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }, {
        text: "The EV transition explained: battery challenges",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-003.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }],
      cross: [{
        text: "Thermoset-thermoplastic joining, natural fibers enable sustainability-focused brake cover",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-006.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }, {
        text: "Engineers solve a mystery on the path to smaller, lighter batteries",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-007.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }, {
        text: "Rolls-Royce and easyJet set new world first",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-008.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }],
      startup: [{
        text: "Amptricity Unveils Solid-State Home Battery",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-011.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }, {
        text: "Niron Magnetics plans to power greener electric motors",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-012.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }, {
        text: "Space startup Stells wants to put spacecraft-charging covers on the moon",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=019&id=2022-019-013.pdf&uuid=545ed268-50e6-4cf0-8f40-822982d881ee"
      }],
      numbers: [{
        title: "131.000",
        text: "is the number of antennas that will be part of the largest radio observatory site, based in Australia. The telescope, called the SKA-Low will pick up radio signals with unprecedented sensitivity between 50 MHz and 350 MHz",
        url: "https://www.nature.com/articles/d41586-022-04254-7"
      }, {
        title: "1 trillion",
        text: "is the number of transistor on a single processor that Intel aim to develop by 2030 thanks to new materials, new packaging technology, embedded memories and other innovations released in nine research papers at IEDM 2022",
        url: "https://www.tomshardware.com/news/intel-charts-course-to-trillion-transistor-chips-2d-transistor-materials-3d-packaging-research"
      }, {
        title: "5560 kg",
        text: "is the wheight of the Michelangelo's statue of David, unveiled on 8 september 1504 in Florence",
        url: "https://www.galleriaaccademiafirenze.it/en/artworks/david-michelangelo/"
      }, {
        title: "2.3 million",
        text: "is the number of large blocks, weighing 6 million tonnes in total, use for the construction of the great pyramid of Giza, in Egypt",
        url: "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"
      }]
    },
    18: {
      automotive: [{
        text: "Bosch taps IBM quantum computers in hunt for new EV materials",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-001.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }, {
        text: "Rimac has broken the electric car speed barrier",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-002.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }, {
        text: "Mercedes-AMG One takes Nurburgring production car lap record",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-003.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }],
      cross: [{
        text: "Photovoltaic-thermal solar tiles",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-006.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }, {
        text: "Electricity-generating windows? Swiss scientists design more efficient transparent solar panels",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-007.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }, {
        text: "Scientists discover plastic-like material that conducts like metal",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-008.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }],
      startup: [{
        text: "Start-up Space Cargo Unlimited launches first space factory",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-012.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }, {
        text: "Hyundai and WeRide plan to fuel self-driving with hydrogen in China",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-013.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }, {
        text: "Rethinking Parking - Why Things are Looking up for German Startup VePa Vertical Parking",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=018&id=2022-018-014.pdf&uuid=f290aa61-8163-48cb-84d9-7b3efc8cad5c"
      }],
      numbers: [{
        title: "13%",
        text: "is the women inventor rate (WIR), which measures the percentage of women inventors among all inventors in patent applications, registered in 2019 in Europe",
        url: "https://www.epo.org/service-support/publications.html?pubid=244#tab3"
      }, {
        title: "€43 billion",
        text: "is the investment agreed by EU nations to become a chip hub able to produce 20% of the world's semiconductors by 2030",
        url: "https://europe.autonews.com/suppliers/eu-nations-advance-44b-plan-become-chip-hub"
      }, {
        title: "88 MW",
        text: "is the energy peak capacity of the Hywind Tampen Project, the world's largest floating wind farm that is becoming operational in Norway",
        url: "https://interestingengineering.com/innovation/worlds-largest-floating-wind-farm-operational"
      }, {
        title: "81 miles",
        text: "is the minimum distance above the moon surface reached by Orion spaceship during the Day Six of the Artemis I mission",
        url: "https://blogs.nasa.gov/artemis/"
      }]
    },
    17: {
      automotive: [{
        text: "Starlink satellite internet for moving vehicles launches in December",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-001.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }, {
        text: "Tiny ultrasound sensors could monitor EV batteries",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-002.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }, {
        text: "Audi selects Sauber as strategic partner for Formula 1 entry from 2026",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-003.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }],
      cross: [{
        text: "Construction and launch of a large-capacity sweep energy storage system from reused electrified vehicle batteries connected to the electrical power grid",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-006.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }, {
        text: 'Storing hydrogen fuel in salts - a step toward "cleaner" energy production',
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-007.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }, {
        text: "Stretchable battery packaging with moisture and gas barrier could power the future of wearable devices",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-008.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }],
      startup: [{
        text: "Lordstown explains how it made in-wheel EV motors work",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-011.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }, {
        text: "Evolito, with an axial-flux motor lighter than Tesla's, starts ramping up its team",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-012.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }, {
        text: "New 9T LABS and Purdue University project targets 3D printed structural aerospace composite parts at scale",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=017&id=2022-017-013.pdf&uuid=7fd82a1b-b844-4c31-a828-b0e5463549e5"
      }],
      numbers: [{
        title: "$32.0 trillion",
        text: "is the global 5G Technology and 5G Infrastructure market size expected in 2027 by a MarketWatch forecast",
        url: "https://www.marketwatch.com/press-release/5g-technology-and-5g-infrastructure-market-2022-size-industry-analysis-by-trends-share-company-overview-growth-and-forecast-by-2027-latest-research-report-2022-11-08#:~:text=The%20global%205G%20Technology%20and%205G%20Infrastructure%20market%20size%20was,USD%2032000.0%20million%20by%202027."
      }, {
        title: "252 meters",
        text: "is the record-breaking rotor diameter of an off-shore wind turbine that will be installed in China. It will be able to generate generate 63.5 million kWh per year",
        url: "https://electrek.co/2022/10/17/offshore-wind-turbine-worlds-largest-rotor-diameter/#:~:text=China%20debuts%20an%20offshore%20wind%20turbine%20with%20the%20world's%20largest%20rotor%20diameter,-Michelle%20Lewis&text=A%2013.6%20megawatt%20(MW)%20offshore,in%20Beijing%2C%20which%20opened%20yesterday."
      }, {
        title: "6.5 meters",
        text: "is the diameter of the James Webb Space Telescop, the world's largest infrared telescope launched in space",
        url: "https://www.nasa.gov/mission_pages/webb/about/index.html"
      }, {
        title: "433",
        text: "is the rnumber of qubit of the new quantum computer recently launched by IBM",
        url: "https://www.reuters.com/technology/ibm-launches-its-most-powerful-quantum-computer-with-433-qubits-2022-11-09/"
      }]
    },
    16: {
      automotive: [{
        text: "Audi Urban Purifier - The fine dust filter for Electric Vehicles",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-001.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }, {
        text: "New materials create safer, quieter EVs",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-002.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }, {
        text: "Porsche: how variable light control shields against the sun",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-003.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }],
      cross: [{
        text: "NASA says its space tech could cut electric car charging times to 5 minutes or less",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-006.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }, {
        text: "This cutting-edge wearable tech has 1,200 tiny solar panels that can charge your phone",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-007.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }, {
        text: "CDZ Compositi introduces patented 3D Flex Composite",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-008.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }],
      startup: [{
        text: "Kite-based energy system aims for high-output, low-impact wind energy",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-011.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }, {
        text: "This groundbreaking motionless wind turbine is 50% more efficient than regular turbines",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-012.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }, {
        text: "StoreDot achieved over 1,000 cycles of extreme fast charging",
        url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=016&id=2022-016-013.pdf&uuid=58fcaf30-e53b-461c-8d40-881b32b21c73"
      }],
      numbers: [{
        title: "301",
        text: "is the number of automobile assembly and engine production plants in Europe",
        url: "https://www.acea.auto/figure/interactive-map-automobile-assembly-and-production-plants-in-europe/"
      }, {
        title: "195 million",
        text: "is the number of paid subscribers of Spotify. With an additional 273 million free users, the platform has a total of 456 million users",
        url: "https://www.theverge.com/2022/10/25/23423510/spotify-total-subscribers-rogan-markle"
      }, {
        title: "3500° F",
        text: "(equivalent to 1900° C) is the temperature that the heat shield of the DragonX spacecraft, made of PICA-X (Phenolic-Impregnated Carbon Ablator), can withstand",
        url: "https://spinoff.nasa.gov/Spinoff2013/t_5.html"
      }, {
        title: "13.3 million",
        text: "m3 is the volume of the largest building in the world, the Boeing Everett Factory. It covers 39.9 hectares",
        url: "https://science.howstuffworks.com/transport/flight/modern/boeings-everett-facility-is-largest-building-on-earth.htm"
      }]
    },
    15: {
      automotive: [
        {
          text: "Multimatic's new TrueActive shocks could make sway bars a thing of the past",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-001.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }, {
          text: "Volvo has developed the world's first interior radar system for cars",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-002.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }, {
          text: "Audi Pilot Project: physical recycling makes mixed plastic waste recyclable",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-003.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }],
      cross: [
        {
          text: "Alice, the first all-electric passenger airplane, takes flight",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-006.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }, {
          text: "Scientists develop unique method of making 3D printed polymer lattices 100-times stronger",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-007.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }, {
          text: "Ceramic Matrix Composites offer lighter, more durable engine parts",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-008.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }],
      startup: [
        {
          text: "EV startup prepares to enter commercial market with novel eAxle",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-011.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }, {
          text: "MoltexFLEX to launch new UK nuclear reactor",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-012.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }, {
          text: "Firefly Aerospace reaches orbit for the first time",
          url: "https://cdn.ferrari.com/internal/newsletters/innovation?nr=015&id=2022-015-013.pdf&uuid=d999e76a-4763-4bd4-87d9-d2371573d3e8"
        }],
      numbers: [
        {
          title: "2.5 to 11.5 km/s",
          text: "is the speed range at which the world's largest piston-driven shock wind tunnel can simulate flight conditions",
          url: "https://interestingengineering.com/transportation/chinas-wind-tunnel-simulates-33-times-the-speed-of-sound"
        }, {
          title: "56.792 km",
          text: "are the kilometers covered by bicycle by Filippo Ganna in one hour (new hour record) at the Tissot velodrome in Grenchen, Switzerland on 8 october 2022",
          url: "https://en.wikipedia.org/wiki/Hour_record"
        }, {
          title: "2.1",
          text: "million kilometers is the total distance that will be covered by the Artemis I mission, departing on 3 september 2022 for the Moon",
          url: "https://www.nasa.gov/specials/artemis-i/"
        }, {
          title: "32",
          text: "minutes short is the variation of the orbit caused by the Dimorphos's impact during DART (Double Asteroid Redirection Test) test on Sept. 26",
          url: "https://www.nasa.gov/press-release/nasa-confirms-dart-mission-impact-changed-asteroid-s-motion-in-space"
        }]
    },
  },

  "newslettercatalogue": {
    "numbers": [
      {
        "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=cover.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
        "sentdate": "2022-02-24",
        "startup": {
          "article": [
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-010.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-010.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-010",
              "text": "",
              "title": "\"Porsche of E-Bikes\" Stokes Greyp Expectations"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-011.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-011.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-011",
              "text": "",
              "title": "Mojo Vision Details Low-Power Chips for Augmented Reality Contact Lenses"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-012.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-012.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-012",
              "text": "",
              "title": "Porsche Ventures invests in motorsport technology start-up Griiip"
            }
          ]
        },
        "bythenumbers": {
          "article": [
            {
              "id": "001",
              "text": "<b>0.5 nm</b> (equivalent to 1 atom dimension) is the thickness of a graphene layer <a href=\"https://graphene-flagship.eu/graphene/understand/\">(Graphene-flagship)</a>"
            },
            {
              "id": "002",
              "text": "127 is the numbers of qubit chip of the most poweful quantum computer in the world, the IBM Eagle (Techmonitor)"
            },
            {
              "id": "003",
              "text": "1537 is the numbers of patented invention filed by Baidu in the field of self-driving vehicles, followed by Toyota and Ford (Iam Media)"
            },
            {
              "id": "004",
              "text": "19000 is the numbers of liters of fuel burned by a Boeing 747 passenger jet during the takeoff and as it climbs to cruising altitude (Executiveflyers)"
            }
          ]
        },
        "cross": {
          "article": [
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-007.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-007.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-007",
              "text": "",
              "title": "Material Could Make Aircraft as Quiet as a Hairdryer"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-008.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-008.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-008",
              "text": "",
              "title": "How AI digital twins help weather the world's supply chain nightmare"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-009.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-009.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-009",
              "text": "",
              "title": "Top 10 Emerging Tech Trends 2022"
            }
          ]
        },
        "digitalpills": {
          "article": {
            "id": "001",
            "text": "Simply click <a href=\"softwarecenter:SoftwareID=ScopeId_914D5CDD-1DDE-4BC2-BFBE-AB15AD189B2B/Application_4ee2990f-0f34-4ef9-88ee-ac3f5ea3d43f\">Google Chrome</a> or <a href=\"softwarecenter:SoftwareID=ScopeId_914D5CDD-1DDE-4BC2-BFBE-AB15AD189B2B/Application_0ff7053e-3a65-4dcc-9243-991cb1f7cae0\">Microsft Edge</a> and set it as default browser <a href=\"https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=Video_Browser.mp4&uuid={uuid}\">(here a tutorial)</a>.<br/>\r\n\t\t\t\t\t\tIf you have any questions or problems, do not hesitate to contact <a href=\"mailto:hdgt@ferrari.it\">Help Desk GT</a> or <a href=\"mailto:hdges@ferrari.it\">Help Desk GeS</a>",
            "title": "Do you want to install the most up-to-date browsers?"
          }
        },
        "id": "001",
        "title": "Ferrari Innovation Newsletter - Nr.1 - 2022",
        "automotive": {
          "article": [
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-001.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-001.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-001",
              "text": "",
              "title": "The car will be like a concert hall and the passengers will be sitting in the middle of it"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-002.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-002.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-002",
              "text": "",
              "title": "Jet Fighter With a Steering Wheel: Inside the Augmented-Reality Car HUD"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-003.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-003.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-003",
              "text": "",
              "title": "The Top 10 EV Battery Makers"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-004.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-004.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-004",
              "text": "",
              "title": "In Mahle's Contact-Free Electric Motor, Power Reaches the Rotor Wirelessly"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-005.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-005.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-005",
              "text": "",
              "title": "Toyota Research Institute Pushes Vehicle's Capabilities To Advance Active Safety"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-006.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=001&id=2022-001-006.pdf&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "id": "2022-001-006",
              "text": "",
              "title": "Volvo Cars to invest in a new plant for next generation fully electric car production"
            }
          ]
        }
      },
      {
        "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=cover.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
        "sentdate": "2022-03-18",
        "startup": {
          "article": [
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-013.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-013.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-013",
              "text": "",
              "title": "This super-realistic virtual world is a driving school for AI"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-014.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-014.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-014",
              "text": "",
              "title": "Composite metal foam on its way to influencing market"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-015.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-015.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-015",
              "text": "",
              "title": "Drone startup to fly pallets without pilots"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-016&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-016.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-016",
              "text": "",
              "title": "Actasys: seeing the future of mobility"
            }
          ]
        },
        "bythenumbers": {
          "article": [
            {
              "id": "001",
              "text": "<b>845 kN</b> is the thrust of a single Merlin engine, the rocket engine developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy Launch Vehicle. The first stage of Falcon 9 rocket incorporates 9 Merlin engines. <a href=\"https://www.spacex.com/vehicles/falcon-9/\">(SpaceX)</a>"
            },
            {
              "id": "002",
              "text": "<b>92 minutes</b> is the time necessary for the International Space Station to make a complete circuit of Earth at a speed of 28.800 km/h <a href=\"https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station/Where_is_the_International_Space_Stationg\">(Esa)</a>"
            },
            {
              "id": "003",
              "text": "<b>243 million</b>  is the numbers of passenger cars on the EU's roads today. <a href=\"https://www.acea.auto/fact/passenger-cars-what-they-are-and-why-they-are-so-important/\">(Acea)</a>"
            },
            {
              "id": "004",
              "text": "<b>2 37,58 km/h</b> is the average speed reached by Usain Bolt during its 100 m sprint world record, in 2009 (9,58 sec) <a href=\"https://www.britannica.com/story/how-fast-is-the-worlds-fastest-human\">(Britannica)</a>"
            },
            {
              "id": "005",
              "text": "<b>250 Pflops </b>(250 trillion operations per second) will be the peak performance of LEONARDO, the European supercomputer (ranked in the 5th position on the global top500 list of the world's most powerful supercomputers) that will be installed in the Tecnopolo of Bologna.<a href=\"https://www.cineca.it/index.php/en/hot-topics/Leonardo\">(Cineca)</a>"
            }
          ]
        },
        "cross": {
          "article": [
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-007.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-007.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-007",
              "text": "",
              "title": "Chevrolet engineers buy a Ferrari 458 engine on eBay to know how it works"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-008.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-008.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-008",
              "text": "",
              "title": "What the well-dressed spacecraft will be wearing"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-009.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-009.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-009",
              "text": "",
              "title": "Rolls-Royce all-electric aircraft breaks world records"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-010.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-010.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-010",
              "text": "",
              "title": "Top 100 Global Innovators"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-011.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-011.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-011",
              "text": "",
              "title": "EVTOL companies are worth billions. Who are the Key Players?"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=cover-2022-002-012.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-012.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-012",
              "text": "",
              "title": "Newly developed smartwatch measures key stress hormone"
            }
          ]
        },
        "digitalpills": {
          "article": {
            "id": [
              "002",
              "002"
            ],
            "text": "To promote our continuous learning, we are launching the \"Digital Innovation Days\" series. The first session will be held on March 22nd as an online webinar dedicated to various aspects of a Data Driven culture: from the Value of Data, to Machine Learning, to Data Visualization. This will be an introductory session open to all colleagues and will be propaedeutic to an upcoming hands-on session dedicated to those who want to experience a full deep dive in the world of Data.",
            "title": "D3: Data Driven Days"
          }
        },
        "id": "002",
        "title": "Ferrari Innovation Newsletter - Nr.2 - 2022",
        "automotive": {
          "article": [
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-001.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-001.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-001",
              "text": "",
              "title": "How Quantum Computers Can Make Batteries Better"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-002.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-002.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-002",
              "text": "",
              "title": "Porsche invests in a factory for high-performance battery cells"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-003.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-003.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-003",
              "text": "",
              "title": "Mercedes-Benz partners with ProLogium to develop next-generation solid-state battery cells for electric vehicles"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-004.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-004.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-004",
              "text": "",
              "title": "Audi is bringing 5G connectivity to its vehicles in 2024"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-005.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-005.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-005",
              "text": "",
              "title": "Pressing ahead with sustainable composites"
            },
            {
              "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-006.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
              "document": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=002&id=2022-002-006.pdf&uuid=8fd523b9-80ee-4300-9bad-87b6e5f7fdfe",
              "id": "2022-002-006",
              "text": "",
              "title": "Gartner Identifies Top Five Automotive Technology Trends for 2022"
            }
          ]
        }
      },
      {
        "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=003&id=cover.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
        "sentdate": "2022-03-24",
        "id": "003",
        "title": "Ferrari Innovation Newsletter - Nr.3 - 2022"
      },
      {
        "image": "https://cdn.ferrari.com/internal/newsletters/innovation?nr=004&id=cover.jpg&uuid=0bfce567-fb05-4153-bd99-140ad7872d2d",
        "sentdate": "2022-04-07",
        "id": "004",
        "title": "Ferrari Innovation Newsletter - Nr.4 - 2022"
      }
    ]
  },

  getTeasers() {
    const teasers = [];
    data.newslettercatalogue.numbers.forEach((newsletter) => {
      if(newsletter.automotive && newsletter.automotive.article){
        teasers.push({
          image: newsletter.image,
          date: newsletter.sentdate,
          number: newsletter.id,
          text: newsletter.title,
        });
      }
    });
    return teasers;
  },
  
  getTeaser(id){
    return data.getTeasers().find((teaser) => teaser.number === id);
  },

  getNewsletter(id) {
    const number = data.newslettercatalogue.numbers.find((n) => n.id === id);
    const newsletter = {
      automotive: [],
      cross: [],
      startup: [],
      numbers: [],
      digitalpills: []
    };
    if(number){

      number.automotive.article.forEach((item) => {
        newsletter.automotive.push({
          text: item.title,
          url: item.document,
          image: item.image
        });
      });
      number.cross.article.forEach((item) => {
        newsletter.cross.push({
          text: item.title,
          url: item.document,
          image: item.image
        });
      });
      number.startup.article.forEach((item) => {
        newsletter.startup.push({
          text: item.title,
          url: item.document,
          image: item.image
        });
      });
      number.bythenumbers.article.forEach((item) => {
        let title, text;

        text = item.text;
        if(text.startsWith('<b>')){
          title = text.substring(3, text.indexOf('</b>'));
          text = text.replace(`<b>${title}</b> `, '');
        } else {
          title = text.substring(0, text.indexOf(' '));
          text = text.replace(title + ' ', '');
        }

        const url = text.includes('<a href=') ? text.substring(text.indexOf('<a href="') + 9, text.indexOf('">')): '';

        text = url ? text.replace(/ <a.*a>/g, '') : text.trim();
        
        text = text.replace(/<b>.*<\/b>/g, '');
        text = text.replace(/<a.*<\/a>/g, '');

        newsletter.numbers.push({
          title,
          text,
          url
        });
      });
      const digitalpill = number.digitalpills.article;
      newsletter.digitalpills.push({
        title: digitalpill.title,
        text: digitalpill.text
      });      
    }
    return newsletter;
  }

};