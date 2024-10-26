package com.example.softtoys

import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import  android.webkit.JsPromptResult
import  android.webkit.JsResult

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webView = findViewById<WebView>(R.id.webView)
        val webSettings: WebSettings = webView.settings
        webView.settings.javaScriptEnabled = true
        webSettings.cacheMode = WebSettings.LOAD_NO_CACHE

        webView.webViewClient = WebViewClient()

        webView.loadUrl("https://terrces.github.io/Soft-toys/")
        WebView.setWebContentsDebuggingEnabled(true)
    }
}
