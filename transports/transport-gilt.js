gumshoe.transport({

  name: 'gilt-svc-event',

  send: function (data) {
    var noop = function () {},
      contentType = 'application/vnd.event.gilt.v1+json';

    reqwest({
      url: '/svc-event/streams/web.test.pageview/events/' + data.uuid,
      contentType: contentType,
      type: 'json',
      headers: { 'Accept': contentType },
      method: 'PUT',
      data: store._.stringify(data),
      error: noop,
      success: noop
    });
  },

  map: function (data) {
    return { uuid: '0c09b600-2218-11e4-b803-90e08f355b68' };
  }

});
