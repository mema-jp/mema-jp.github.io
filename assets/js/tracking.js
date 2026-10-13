'use strict';
/**
 * 問い合わせ導線の計測（GA4: G-HCZ9R24QPR）
 *
 * 2026-10-13 時点で、サイト経由の問い合わせは CorporateLead に 0 件。
 * 原因が「来ていない」のか「来たが連絡できなかった」のか分かっていない。
 *
 * とくに mailto: は、端末にメールアプリが設定されていないと
 * **何も起きずに終わる。** その離脱は誰にも見えないので、まず経路ごとの
 * クリック数を出す。広告を出すかどうかはこの数字が出てから決める。
 *
 * 送るのはイベントだけで、個人情報は一切載せない。
 */
(function () {
  function send(name, params) {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', name, params);
  }

  function closest(el, sel) {
    return el && el.closest ? el.closest(sel) : null;
  }

  // 捕捉フェーズで拾う。mailto: / tel: は遷移が先に走ることがあるため
  document.addEventListener(
    'click',
    function (e) {
      var link = closest(e.target, 'a[href^="mailto:"], a[href^="tel:"]');
      if (link) {
        send('contact_click', {
          method: link.getAttribute('href').indexOf('tel:') === 0 ? 'tel' : 'mail',
          page_path: location.pathname,
        });
        return;
      }
      // chat_widget.js が作るフローティングボタン
      if (closest(e.target, '#mema-chat-fab')) {
        send('chat_open', { page_path: location.pathname });
      }
    },
    true,
  );

  // 料金表まで到達したか。広告を出したとき「価格を見る前に帰ったか」を切り分ける
  var pricing = document.getElementById('pricing');
  if (pricing && typeof IntersectionObserver === 'function') {
    var seen = false;
    var io = new IntersectionObserver(
      function (entries) {
        if (seen) return;
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            seen = true;
            send('view_pricing', { page_path: location.pathname });
            io.disconnect();
            return;
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(pricing);
  }
})();
