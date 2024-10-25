package com.example.softtoys

import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webView = findViewById<WebView>(R.id.webView)
        val webSettings: WebSettings = webView.settings
//        webSettings.javaScriptEnabled = true
//        webSettings.cacheMode = WebSettings.LOAD_NO_CACHE

      webView.clearCache(true)
//        webView.clearHistory()
        webView.webViewClient = WebViewClient()

// Добавляем параметр времени к URL для загрузки новой версии страницы
        val timestamp = System.currentTimeMillis()
        webView.loadUrl("https://terrces.github.io/AndroidApp/")
        WebView.setWebContentsDebuggingEnabled(true)
    }
}
