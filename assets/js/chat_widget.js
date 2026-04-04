'use strict';

/**
 * MEMA Corporate Chat Widget
 * Opens mema.jp/chat in an iframe overlay.
 */
(function () {
  var CHAT_URL = 'https://mema.jp/chat?embed=1';

  var isOpen = false;
  var fab = null;
  var overlay = null;

  function createFab() {
    fab = document.createElement('button');
    fab.id = 'mema-chat-fab';
    fab.setAttribute('aria-label', 'AIアシスタントを開く');
    fab.innerHTML =
      '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">' +
      '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>' +
      '<path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>';
    fab.addEventListener('click', toggle);
    document.body.appendChild(fab);
  }

  function createOverlay() {
    overlay = document.createElement('div');
    overlay.id = 'mema-chat-overlay';
    overlay.innerHTML =
      '<div id="mema-chat-container">' +
      '<button id="mema-chat-close" aria-label="閉じる">&times;</button>' +
      '<iframe id="mema-chat-iframe" src="' + CHAT_URL + '" allow="microphone"></iframe>' +
      '</div>';
    overlay.querySelector('#mema-chat-close').addEventListener('click', toggle);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) toggle();
    });
    document.body.appendChild(overlay);
  }

  function toggle() {
    if (!overlay) createOverlay();
    isOpen = !isOpen;
    overlay.style.display = isOpen ? 'flex' : 'none';
    fab.style.display = isOpen ? 'none' : 'flex';
  }

  function injectStyles() {
    var style = document.createElement('style');
    style.textContent =
      '#mema-chat-fab{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;' +
      'background:#4f46e5;color:#fff;border:none;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.25);' +
      'z-index:99999;display:flex;align-items:center;justify-content:center;transition:transform .2s}' +
      '#mema-chat-fab:hover{transform:scale(1.08);background:#4338ca}' +
      '#mema-chat-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:99998;display:none;' +
      'align-items:flex-end;justify-content:flex-end;padding:24px}' +
      '#mema-chat-container{position:relative;width:400px;height:600px;max-width:calc(100vw - 32px);' +
      'max-height:calc(100vh - 48px);border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,.2);background:#fff}' +
      '#mema-chat-close{position:absolute;top:8px;right:12px;z-index:1;background:rgba(0,0,0,.3);color:#fff;' +
      'border:none;border-radius:50%;width:28px;height:28px;font-size:18px;line-height:28px;text-align:center;' +
      'cursor:pointer;transition:background .2s}' +
      '#mema-chat-close:hover{background:rgba(0,0,0,.5)}' +
      '#mema-chat-iframe{width:100%;height:100%;border:none}' +
      '@media(max-width:480px){#mema-chat-overlay{padding:0}' +
      '#mema-chat-container{width:100%;height:100%;max-width:100%;max-height:100%;border-radius:0}}';
    document.head.appendChild(style);
  }

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectStyles();
      createFab();
    });
  } else {
    injectStyles();
    createFab();
  }
})();
