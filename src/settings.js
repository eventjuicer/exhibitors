import React from 'react';

import HotelIcon from '@material-ui/icons/Hotel';
import BusinessIcon from '@material-ui/icons/Business';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import WebIcon from '@material-ui/icons/Web';

import BuildIcon from '@material-ui/icons/Build';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import {
  CompanyPurchases,
  BuyTicketByNameButton,
  ProfilePreviewButton
} from './components'
import {getLocalesArray} from './i18n'

const settings = {

  promoninja: {
  //  event_id: 95, //teh 20 - 89, teh21 - 95
    show_points: false,

    banners: [
      {
        name: "twitter/linkedin/facebook 1920x1080",
        asset_id:  "teh21/teh_fb_tt_li",
        text_xy: [60, 80],
        text_size: 150,
        text_gravity: "south_east"
      },
      {
        name: "instagram 1080x1080",
        asset_id:  "teh21/teh_instagram",
        text_xy: [40, 70],
        text_size: 140,
        text_gravity: "south_east"
      },
      
      {
        name: "468x60",
        asset_id:  "teh21/teh_banner_468x60",
        text_xy: [20, 10],
        text_size: 30,
        text_gravity: "south_east"
      },
      {
        name: "336x280",
        asset_id:  "teh21/teh_banner_336x280",
        text_xy: [15, 30],
        text_size: 40,
        text_gravity: "south_east"
      },
      {
        name: "300x250",
        asset_id:  "teh21/teh_banner_300x250",
        text_xy: [10, 20],
        text_size: 25,
        text_gravity: "south_east"
      },
    
      {
        name: "728x90",
        asset_id:   "teh21/teh_banner_728x90",
        text_xy: [25, 15],
        text_size: 45,
        text_gravity: "south_east"
      },
      {
        name: "250x250", 
        asset_id:   "teh21/teh_banner_250x250",
        text_xy: [10, 17],
        text_size: 34,
        text_gravity: "south_east"
      }
    ]

  },


  companydata: {

    
    texts: ["about", "products"],
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
      "companydata", 
      "people",
      "purchases"
    ]},
    {name: "event", icon: BuildIcon, children: [
      "logistics",
      "representatives",
      // "register/party",
      "arrangement",
      "vouchers",
    ]},

    // {name: "leads", icon: RecentActorsIcon, children: [
    //   "visitors",
    //   "requests",
    //   "meetups",
    //   "vips",
    //   "scans"
    // ]},

    {name: "promo", icon: VolumeUpIcon, children: [
      "premium",
      "ranking",
      "promote",
      // "invite-vip",
      // "posts"
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
                      //filter={(item) => item.role=="service_external"}
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
                      // check: true,
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
                      icon: VolumeUpIcon,
                      // check: true
                    },

                    {
                      label: "vips",
                      icon: VolumeUpIcon,
                      // check: true
                    },

                    {
                      label: "reps",
                      // check: true,
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