/*
  sent_at
  resent_at
  responded_at
  scheduled_at
*/

export const status = record => {
  if (record.sent_at === '') {
    return -3;
  }

  if (record.agreed) {
    if (record.scheduled_at === '') {
      return 1;
    }
    return 2;
  } else {
    // rejected
    if (record.responded_at === '') {
      return -1;
    }
    //no reaction
    return -2;
  }
};
