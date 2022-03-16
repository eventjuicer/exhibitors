import { Resource } from 'react-admin';




/** RESOURCES */
import { PeopleCreate, PeopleEdit, PeopleList, PeopleIcon} from './views/people';
import { RepresentativeList, RepresentativeEdit, RepresentativeCreate, RepresentativeIcon} from './views/representatives';
import { PartyList, PartyEdit, PartyCreate, PartyIcon } from './views/party';
import { CompanyDataList, CompanyDataEdit, CompanyDataIcon} from './views/companydata';
import { PurchaseList, PurchaseIcon} from './views/purchases';
import { UpgradeList, UpgradeShow, UpgradeIcon } from './views/upgrades';
import { PremiumList, PremiumShow, PremiumIcon } from './views/premium';
import { ArrangementList, ArrangementShow, ArrangementIcon } from './views/arrangement';
import { VoucherList, VoucherShow, VoucherIcon } from './views/vouchers';
import { SpecialList, SpecialEdit, SpecialIcon} from './views/offers';

import { ViewList as MeetupList, ViewEdit as MeetupEdit, ViewCreate as MeetupCreate } from './views/meetups';
import { ViewList as VisitorList, /** ViewEdit as VisitorEdit, ViewEdit as VisitorShow,*/ } from './views/visitors';
import { ViewList as ScanList, ViewEdit as ScanEdit } from './views/scans';
import { PostList, PostEdit, PostCreate} from './views/posts';
import { VipList} from './views/vips';


// import { ViewList as NewsletterList } from './views/newsletters';
// import { ViewList as CampaignList, ViewCreate as CampaignCreate, ViewEdit as CampaignEdit } from './views/campaigns';
// import { ViewList as ImportList, ViewCreate as ImportCreate, ViewEdit as ImportEdit } from './views/imports';
// import { ViewList as ContactList, ViewEdit as ContactEdit } from './views/contacts';
// import { ViewList as ContactlistList, ViewCreate as ContactlistCreate, ViewEdit as ContactlistEdit } from './views/contactlists';
// import { RequestList} from './views/requests';
// import { ViewList as BannerList } from './views/__banners';


const resources =  [
  <Resource key="people" name="people" list={PeopleList} edit={PeopleEdit} create={PeopleCreate} icon={PeopleIcon} />,
  <Resource key="representatives" name="representatives" list={RepresentativeList} edit={RepresentativeEdit} create={RepresentativeCreate} icon={RepresentativeIcon} />,
  <Resource key="party-participants" name="party-participants" list={PartyList} edit={PartyEdit} create={PartyCreate} icon={PartyIcon} />,
  <Resource key="companydata" name="companydata" list={CompanyDataList} edit={CompanyDataEdit} icon={CompanyDataIcon}/>,
  <Resource key="purchases" name="purchases" list={PurchaseList} icon={PurchaseIcon} />,  
  <Resource key="upgrades" name="upgrades" list={UpgradeList} show={UpgradeShow} icon={UpgradeIcon} />,
  <Resource key="premium" name="premium" list={PremiumList} show={PremiumShow} icon={PremiumIcon} />,
  <Resource key="arrangement" name="arrangement" list={ArrangementList} show={ArrangementShow} icon={ArrangementIcon} />,
  <Resource key="vouchers" name="vouchers" list={VoucherList} show={VoucherShow} icon={VoucherIcon} />,
  <Resource key="specials" name="specials" list={SpecialList} edit={SpecialEdit} icon={SpecialIcon} />,

  <Resource key="meetups" name="meetups" list={MeetupList} edit={MeetupEdit} create={MeetupCreate} />,
  <Resource key="visitors" name="visitors" list={VisitorList} />,
  <Resource key="scans" name="scans" list={ScanList} edit={ScanEdit} />,
  <Resource key="posts" name="posts" list={PostList} edit={PostEdit} create={PostCreate} />,
  <Resource key="vips" name="vips" list={VipList}  />,

  // <Resource key="requests" name="requests" list={RequestList}  />,
  // <Resource key="banners" name="banners" list={BannerList} />,
  // <Resource key="imports" name="imports" list={ImportList} edit={ImportEdit} create={ImportCreate} />,
  // <Resource key="contactlists" name="contactlists" list={ContactlistList} edit={ContactlistEdit} create={ContactlistCreate} />,
  // <Resource key="campaigns" name="campaigns" list={CampaignList} edit={CampaignEdit} create={CampaignCreate} />,
  // <Resource key="contacts" name="contacts" list={ContactList} edit={ContactEdit} />,
  // <Resource key="newsletters" name="newsletters" list={NewsletterList} />,


];


export default resources