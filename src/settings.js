import React from 'react';
import HotelIcon from '@material-ui/icons/Hotel';
import BusinessIcon from '@material-ui/icons/Business';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import WebIcon from '@material-ui/icons/Web';
import BuildIcon from '@material-ui/icons/Build';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import merge from 'lodash/merge'
import {
  CompanyPurchases,
  BuyTicketByNameButton,
  ProfilePreviewButton
} from './components'
import {getLocalesArray} from './i18n'

const settings = {

  visitors: {

    excluded_domains: [
      "gmail.",
      "home.",
      "interia.",
      "onet.",
      "wp.pl",
      "o2.pl",
    ]
  },

  badgescanner: {

    baseLabel: "badgescanner",
    items: [

    // {
    //   label: "open_scanning_website",
    //   image: "https://res.cloudinary.com/eventjuicer/image/upload/v1649365931/www/badgescanner/howto_step_01_signin.png"
    // },
    // {
    //   label: "close_scanning_website",
    //   image: "https://res.cloudinary.com/eventjuicer/image/upload/v1649365937/www/badgescanner/howto_step_02_ready.png"
    // },
    {
      label: "open_camera_and_shoot",
      image: "https://res.cloudinary.com/eventjuicer/image/upload/v1649365936/www/badgescanner/howto_step_03_openurl.png"
    },
    {
      label: "add_optional_comment",
      image: "https://res.cloudinary.com/eventjuicer/image/upload/v1649365932/www/badgescanner/howto_step_04_comment.png"
    }]

  },

  promoninja: {
  //  event_id: 95, //teh 20 - 89, teh21 - 95
    show_points: true,

    banners: [
      {
        name: "twitter/linkedin/facebook 1920x1080",
        asset_id:  "teh24/teh_fb_tt_li",
        text_xy: [80, 80],
        text_size: 150,
        text_gravity: "south_east",
        text_color: "#000"
      },
      {
        name: "instagram 1080x1080",
        asset_id:  "teh24/teh_instagram",
        text_xy: [70, 70],
        text_size: 120,
        text_gravity: "south_east",
        text_color: "#000"
      },
      
      {
        name: "468x60",
        asset_id:  "teh24/teh_banner_468x60",
        text_xy: [30, 12],
        text_size: 25,
        text_gravity: "south_east",
        text_color: "#000"
      },
      {
        name: "336x280",
        asset_id:  "teh24/teh_banner_336x280",
        text_xy: [40, 22],
        text_size: 50,
        text_gravity: "south_east",
        text_color: "#000"
      },
      {
        name: "300x250",
        asset_id:  "teh24/teh_banner_300x250",
        text_xy: [20, 20],
        text_size: 25,
        text_gravity: "south_east",
        text_color: "#000"
      },
    
      {
        name: "728x90",
        asset_id:   "teh24/teh_banner_728x90",
        text_xy: [55, 15],
        text_size: 35,
        text_gravity: "south_east",
        text_color: "#000"
      },
      {
        name: "250x250", 
        asset_id:   "teh24/teh_banner_250x250",
        text_xy: [20, 17],
        text_size: 30,
        text_gravity: "south_east",
        text_color: "#000"
      }
    ]

  },


  companydata: {

    
    markdown: ["about", "products"],
    longtexts: ["ltd_reject_template", "ltd_accept_template"],
    links: ["website", "linkedin", "twitter", "facebook"],
    tags: ["keywords"],
    translatable: ["countries"],

  
    checkboxes: {
      'keywords' : [
        'logistics',
        'payment',
        'platform',
        'sales_generation',
        'software',
        'communication',
        'customer_support',
        'analytics',
        'international_sales',
        'omnichannel',
        'infrastructure'
    ]},

    radios: {
      'countries' :  [
        'national', 'europe', 'global', 'other'
      ],
      'lang' :  getLocalesArray() || ["en"],
    }


   },

   support: [
     {
      initials: "KM",
      fname: "Karolina",
      lname: "Michalak",
      position: "Relationship Manager",
      phone: "+48 721 945 134",
      email: "hello@targiehandlu.com.pl",
      avatar: "https://res.cloudinary.com/eventjuicer/image/upload/v1598009850/targiehandlu_people_km.jpg"
     }
   ],

   event: {

    dates: {
      preassembly_start: "2022-04-13 14:00",
      preassembly_end: "2022-04-13 22:00",
      assembly_start: "2022-04-14 08:00",
      assembly_end: "2022-04-14 09:45",
      opening: "2022-04-14 10:00",
      closing: "2022-04-14 17:00"
    }

   },

   menuItems: [
    {name: "profile", icon: BusinessIcon, children: [
      {name: "companydata", visible: true}, 
      {name: "people", visible: true}, 
      {name: "purchases", visible: true}, 
    ]},
    {name: "event", icon: BuildIcon, children: [
      {name: "logistics", visible: true}, 
      {name: "representatives", visible: true}, 
      {name: "arrangement", visible: true}, 
      {name: "vouchers", visible: true}, 
      {name: "register/party", visible: false}, 
    ]},

    {name: "leads", icon: RecentActorsIcon, children: [
      {name: "visitors", visible: true}, 
      {name: "meetups", visible: true}, 
      {name: "vips", visible: true}, 
      {name: "scans", visible: true}, 
    ]},

    {name: "promo", icon: VolumeUpIcon, children: [
      {name: "premium", visible: true}, 
      {name: "ranking", visible: true}, 
      {name: "promote", visible: true}, 
      {name: "posts", visible: false}, 
    ]},

  ],

  logistics: {

        timeline: {

            items: [
                {
                  label: "month",
                  days: -30, 
                  items: [
                    {
                      label: "profile",
                      check: "/checks/companydata",
                      edit: "/companydata",
                      icon : BusinessIcon,
                      buttons: [
                        <ProfilePreviewButton key="preview" />
                      ]
                    },
                    {
                      label: "people",
                      check: "/checks/people",
                      edit: "/people",
                      icon : BusinessIcon
                    },
                    {
                      label: "reps",
                      check: "/checks/representatives",
                      edit: "/representatives",
                      icon : BuildIcon
                    },
                    {
                      label: "arrangement",
                      check: "/checks/arrangement",
                      edit: "/arrangement",
                      icon: BuildIcon,
                      details: <CompanyPurchases  />,
                      buttons: [
                        // <BuyTicketByNameButton key="clearspace" name="clearspace" />
                      ]
                      // filter={(item) => item.role=="service_external"}
                    },
                    {
                      label: "premium",
                      edit: "/premium",
                      icon: VolumeUpIcon,
                      details: <CompanyPurchases filter={(item)=>item.featured} />
                    }
                  ]
                },
                {
                  label: "3weeks",
                  days: -21,
                  items: [
                    {
                      label: "arrangement",
                      check: "/checks/arrangement",
                      edit: "/arrangement",
                      important: true,
                      icon: BuildIcon,
                      details: <CompanyPurchases  />
                      //filter={(item) => item.role=="service_external"}
                    },
                    {
                      label: "promo",
                      icon: VolumeUpIcon,
                      edit: "/promote",
                      // check: true
                    }
                  
                  ]
                },
                {
                  label: "2weeks",
                  days: -14,
                  items: [
                    {
                      label: "meetups",
                      icon: RecentActorsIcon,
                      edit: "/visitors",
                      check: "/checks/meetups"
                    },

                    {
                      label: "vips",
                      icon: RecentActorsIcon,
                       check: "/checks/vips",
                       edit: "/vips",
                    },

                    {
                      label: "reps",
                      check: "/checks/representatives",
                      important: true,
                      icon : BuildIcon,
                      edit: "/representatives",
                    },
                    {
                      label: "vouchers",
                      icon: BuildIcon,
                      edit: "/vouchers",
                      important: true,
                      // check: true
                    },
                  ]
                },
                {
                  label: "week",
                  days: -7,
                  items: [
                    {
                      label: "shipment",
                      important: true,
                    }
                  ]
                },
                {
                  label: "before",
                  days: -1,
                  items: [    
                    {
                      label: "pre_welcome"
                    },
                    {
                      label: "pre_welcomepacks"
                    },
                    {
                      label: "preassembly"
                    },
                    {
                      label: "pre_parking"
                    },
                
                  ]
                },
                {
                  label: "event",
                  days: 0,
                  items: [
                    {
                      label: "parking"
                    },
                    {
                      label: "welcome"
                    },
                    {
                      label: "welcomepacks"
                    },
                    {
                      label: "inventory"
                    },
                    {
                      label: "assembly"
                    },
                    {
                      label: "fmm"
                    },
                    {
                      label: "scans"
                    },
                    {
                      label: "problems"
                    },
                    {
                      label: "disassembly"
                    }
                  ]
                },
                {
                  label: "after",
                  days: 1,
                  items:[
                    {label: "leads"},
                    {label: "packages"},
                    //{},
                    //{}
                  ]
                }]
        }
    }

}


export default settings