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

        // Получаем WebView из макета
        val webView = findViewById<WebView>(R.id.webView)

        // Включаем JavaScript
        val webSettings: WebSettings = webView.settings
        webSettings.javaScriptEnabled = true

        // Задаем WebViewClient, чтобы открывать ссылки внутри WebView, а не в браузере
        webView.webViewClient = WebViewClient()

        // Загружаем URL
        webView.loadUrl("https://terrces.github.io/AndroidApp/")
    }
}
