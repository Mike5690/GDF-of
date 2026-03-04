/**
 * GDF 官网主脚本
 * 功能：页面渲染、粒子背景、滚动动画、导航交互
 */
import './style.css';

// ========== 页面 HTML 模板 ==========
const pageHTML = `
<canvas id="particleCanvas"></canvas>

<!-- 公告栏 -->
<div class="announcement-bar">
  <div class="announcement-track">
    <span class="announcement-item">🚨 【GDF 核心生态与经济模型升级公告】</span>
    <span class="announcement-item">🔧 通缩机制重大升级 — 升级为“GDF 24—60小时超级纪元动态LP分红机制”！</span>
    <span class="announcement-item">🛡️ 保卫底池，拒绝死亡螺旋 — 日均 0.2% 平滑通缩，牢牢锁住底池价值！</span>
    <span class="announcement-item">🤖 斩断机器人套利（Anti-Bot）— 有效防止 MEV 夹子机器人高频吸血！</span>
    <span class="announcement-item">💥 每 24—60 小时集中大额销毁与分红，每次触发都是社区狂欢的利好节点！</span>
    <span class="announcement-item">🚀 GDF 团队始终致力于长期共识共建，真正的起飞才刚刚开始！🌕</span>
    <span class="announcement-item">🚨 【GDF 核心生态与经济模型升级公告】</span>
    <span class="announcement-item">� 通缩机制重大升级 — 升级为“GDF 24—60小时超级纪元动态LP分红机制”！</span>
    <span class="announcement-item">�️ 保卫底池，拒绝死亡螺旋 — 日均 0.2% 平滑通缩，牢牢锁住底池价值！</span>
    <span class="announcement-item">🤖 斩断机器人套利（Anti-Bot）— 有效防止 MEV 夹子机器人高频吸血！</span>
    <span class="announcement-item">💥 每 24—60 小时集中大额销毁与分红，每次触发都是社区狂欢的利好节点！</span>
    <span class="announcement-item">🚀 GDF 团队始终致力于长期共识共建，真正的起飞才刚刚开始！🌕</span>
  </div>
</div>

<!-- 导航栏 -->
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="#hero" class="nav-brand">
      <img src="/logo.png" alt="GDF" class="nav-logo">
      <span class="nav-title">GDF</span>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="#about" class="nav-link">关于</a>
      <a href="#tokenomics" class="nav-link">代币</a>
      <a href="#deflation" class="nav-link">五重通缩</a>
      <a href="#incentive" class="nav-link">激励体系</a>
      <a href="#nft" class="nav-link">NFT节点</a>

      <a href="#security" class="nav-link">安全审计</a>
      <a href="#roadmap" class="nav-link">路线图</a>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="菜单">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Hero 区域 -->
<section class="hero" id="hero">
  <div class="hero-glow"></div>
  <div class="hero-content">
    <h1 class="hero-title"><span class="gradient-text">GDF</span> 协议</h1>
    <p class="hero-subtitle">下一代 DeFi 5.0 · 五重通缩自驱动价值生态</p>
    <p class="hero-desc">
      创新性集成定时销毁、交易税收、动态护盘、社区参与及退出约束五大通缩引擎，<br>
      通过链上硬编码实现全流程自动化执行，构建自我调节、持续增值的经济闭环。
    </p>
    <div class="hero-stats">
      <div class="stat-item">
        <span class="stat-value">2.1亿</span>
        <span class="stat-label">固定总量</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">5</span>
        <span class="stat-label">通缩引擎</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">10</span>
        <span class="stat-label">推荐层级</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">2000</span>
        <span class="stat-label">NFT 节点</span>
      </div>
    </div>
    <div class="hero-actions">
      <a href="#deflation" class="btn btn-primary">
        <span>探索协议</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="#tokenomics" class="btn btn-outline"><span>代币信息</span></a>
    </div>
  </div>

</section>

<!-- 关于 GDF -->
<section class="section" id="about">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">关于 <span class="gradient-text">GDF</span> 协议</h2>
      <p class="section-desc">DeFi 5.0 时代的创新范式 — 自驱动经济系统的标杆</p>
    </div>
    <div class="about-grid">
      <div class="about-card glass-card reveal">

        <h3>五重通缩</h3>
        <p>不同于传统 DeFi 协议依赖单一销毁或回购机制，GDF 创新性地集成了五大通缩引擎，通过链上硬编码实现全流程自动化执行。</p>
      </div>
      <div class="about-card glass-card reveal">

        <h3>多层激励</h3>
        <p>通过十层推荐奖励与团队级别奖励，协议实现了用户增长与价值分配有机统一，形成"通缩-增值-激励-共识"正向循环。</p>
      </div>
      <div class="about-card glass-card reveal">

        <h3>NFT 节点</h3>
        <p>全球限量 2000 个 NFT 节点为早期参与者提供稀缺性权益与持续分红通道，链上确权永久持有。</p>
      </div>
      <div class="about-card glass-card reveal">

        <h3>安全可信</h3>
        <p>合约审计、Owner 权限永久抛弃、代码透明化，践行"代码即法律"的区块链核心精神，零信任权限架构。</p>
      </div>
    </div>
    <!-- DeFi 演进时间线 -->

  </div>
</section>

<!-- 代币信息 -->
<section class="section section-alt" id="tokenomics">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">代币 <span class="gradient-text">基本信息</span></h2>
      <p class="section-desc">固定总量，永不增发 — 稀缺性由智能合约底层保障</p>
    </div>
    <div class="token-grid">
      <div class="token-card glass-card reveal"><div class="token-icon">🪙</div><div class="token-label">代币名称</div><div class="token-value">GDF</div></div>
      <div class="token-card glass-card reveal"><div class="token-icon">📊</div><div class="token-label">总发行量</div><div class="token-value">2.1 亿枚</div></div>
      <div class="token-card glass-card reveal"><div class="token-icon">⛓️</div><div class="token-label">所属链</div><div class="token-value">BSC</div><div class="token-sub">BNB Smart Chain</div></div>
      <div class="token-card glass-card reveal"><div class="token-icon">🔄</div><div class="token-label">交易对</div><div class="token-value">GDF / WBNB</div></div>
    </div>
    <div class="token-features">
      <div class="feature-item glass-card reveal"><span class="feature-check">✅</span><span>固定总量写入合约底层，永不增发</span></div>
      <div class="feature-item glass-card reveal"><span class="feature-check">✅</span><span>五重通缩引擎持续减少流通量</span></div>
      <div class="feature-item glass-card reveal"><span class="feature-check">✅</span><span>代币稀缺性随时间动态增强</span></div>
      <div class="feature-item glass-card reveal"><span class="feature-check">✅</span><span>无铸币功能，杜绝超发风险</span></div>
    </div>
  </div>
</section>

<!-- 五重通缩 -->
<section class="section" id="deflation">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">五重通缩 <span class="gradient-text">引擎</span></h2>
      <p class="section-desc">多维度、立体化的通缩设计，驱动代币稀缺性持续增强</p>
    </div>
    <div class="deflation-grid">
      <div class="deflation-card glass-card reveal">

        <h3>定时通缩</h3>
        <p class="deflation-subtitle">每 6 小时自动销毁</p>
        <div class="deflation-detail">
          <p>智能合约每 6 小时自动从 LP 池中提取 <strong>0.25%</strong> 的 GDF 代币，发送至黑洞地址永久销毁。</p>
          <div class="deflation-metric"><span class="metric-label">每日销毁</span><span class="metric-value">~1% LP 池</span></div>
          <div class="deflation-metric"><span class="metric-label">触发方式</span><span class="metric-value">链上时间戳自动</span></div>
        </div>
      </div>
      <div class="deflation-card glass-card reveal">

        <h3>交易通缩</h3>
        <p class="deflation-subtitle">卖出即销毁</p>
        <div class="deflation-detail">
          <p>卖出行为设置 <strong>10%</strong> 交易税率，其中 5% 直接销毁，5% 划转至基金会。</p>
          <div class="deflation-metric"><span class="metric-label">卖出税率</span><span class="metric-value">10%</span></div>
          <div class="deflation-metric"><span class="metric-label">销毁比例</span><span class="metric-value">50% 税收</span></div>
        </div>
      </div>
      <div class="deflation-card glass-card reveal">

        <h3>护盘通缩</h3>
        <p class="deflation-subtitle">AI 动态价格保护</p>
        <div class="deflation-detail">
          <p>AI 实时监测价格波动，24h 内下跌时自动加税：<strong>额外税率 = 跌幅 × 2</strong>，全额销毁。</p>
          <div class="deflation-metric"><span class="metric-label">示例(跌10%)</span><span class="metric-value">税率升至 30%</span></div>
          <div class="deflation-metric"><span class="metric-label">保护逻辑</span><span class="metric-value">跌幅越大税率越高</span></div>
        </div>
      </div>
      <div class="deflation-card glass-card reveal">

        <h3>社区通缩</h3>
        <p class="deflation-subtitle">社区驱动销毁</p>
        <div class="deflation-detail">
          <p>任何用户每日可发起一次 LP 池代币销毁，最高提取 <strong>2%</strong>，部分激励分销商，剩余永久销毁。</p>
          <div class="deflation-metric"><span class="metric-label">最大提取</span><span class="metric-value">2% LP 池</span></div>
          <div class="deflation-metric"><span class="metric-label">激励占比</span><span class="metric-value">20%→80%</span></div>
        </div>
      </div>
      <div class="deflation-card glass-card reveal">

        <h3>退出通缩</h3>
        <p class="deflation-subtitle">长期锁仓激励</p>
        <div class="deflation-detail">
          <p>LP 撤出设阶梯式扣除机制，不设强制锁仓期，通过经济成本引导长期持有。所有扣除代币直接销毁。</p>
          <div class="deflation-metric"><span class="metric-label">扣除比例</span><span class="metric-value">各阶段 1%</span></div>
          <div class="deflation-metric"><span class="metric-label">所有扣除</span><span class="metric-value">直接销毁</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 激励体系 -->
<section class="section section-alt" id="incentive">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">激励 <span class="gradient-text">体系</span></h2>
      <p class="section-desc">十层推荐奖励 + 团队级别奖 — 多维度价值分配系统</p>
    </div>
    <div class="incentive-layout">
      <div class="incentive-block glass-card reveal">
        <h3><span class="gradient-text">十层推荐</span>奖励体系</h3>
        <p class="incentive-intro">总奖励比例最高 <strong>15%</strong>，以 BNB 形式实时到账</p>
        <div class="referral-table">
          <div class="referral-header"><span>层级</span><span>奖励比例</span><span>领取条件</span></div>
          <div class="referral-row highlight"><span>第 1 层</span><span class="reward-pct">3%</span><span>LP 持仓有效</span></div>
          <div class="referral-row"><span>第 2 层</span><span class="reward-pct">2.5%</span><span>+3 个有效直推</span></div>
          <div class="referral-row"><span>第 3 层</span><span class="reward-pct">2%</span><span>+5 个有效直推</span></div>
          <div class="referral-row"><span>第 4 层</span><span class="reward-pct">1.5%</span><span>+7 个有效直推</span></div>
          <div class="referral-row"><span>第 5-10 层</span><span class="reward-pct">各 1%</span><span>+10 个有效直推</span></div>
        </div>
      </div>
      <div class="incentive-block glass-card reveal">
        <h3><span class="gradient-text">团队级别</span>奖励</h3>
        <p class="incentive-intro">极差制计算，平级奖 <strong>10%</strong> 下级团队奖金</p>
        <div class="team-table">
          <div class="team-header"><span>级别</span><span>团队业绩</span><span>有效直推</span><span>奖励</span></div>
          <div class="team-row"><span class="level-badge v1">V1</span><span>≥1 BNB</span><span>≥1 人</span><span class="reward-pct">1%</span></div>
          <div class="team-row"><span class="level-badge v2">V2</span><span>≥5 BNB</span><span>≥3 人</span><span class="reward-pct">2%</span></div>
          <div class="team-row"><span class="level-badge v3">V3</span><span>≥20 BNB</span><span>≥5 人</span><span class="reward-pct">3%</span></div>
          <div class="team-row"><span class="level-badge v4">V4</span><span>≥100 BNB</span><span>≥7 人</span><span class="reward-pct">4%</span></div>
          <div class="team-row"><span class="level-badge v5">V5</span><span>≥500 BNB</span><span>≥10 人</span><span class="reward-pct">5%</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- NFT 节点 -->
<section class="section" id="nft">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">NFT <span class="gradient-text">节点</span></h2>
      <p class="section-desc">全球限量 2000 个 — 稀缺权益与持续分红</p>
    </div>
    <div class="nft-layout" style="grid-template-columns:1fr">
      <div class="nft-info">
        <div class="nft-params">
          <div class="nft-param glass-card reveal"><span class="param-icon">💰</span><span class="param-label">节点价格</span><span class="param-value">0.8 BNB</span></div>
          <div class="nft-param glass-card reveal"><span class="param-icon">🌍</span><span class="param-label">发行总量</span><span class="param-value">2,000 个</span></div>
          <div class="nft-param glass-card reveal"><span class="param-icon">👤</span><span class="param-label">购买限制</span><span class="param-value">每个地址限购一个</span></div>
          <div class="nft-param glass-card reveal"><span class="param-icon">🔗</span><span class="param-label">权益属性</span><span class="param-value">链上确权 · 永久持有</span></div>
        </div>
        <div class="nft-benefits glass-card reveal">
          <h4>🎁 核心权益</h4>
          <div class="benefit-list">
            <div class="benefit-item">
              <span class="benefit-icon">📈</span>
              <div><strong>全网入金分红</strong><p>每笔入金 10% 划入分红池，按节点总数均分，BNB 实时发放</p></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- 安全审计 -->
<section class="section" id="security">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">安全性与 <span class="gradient-text">合约审计</span></h2>
      <p class="section-desc">零信任权限架构 · 代码即法律</p>
    </div>
    <div class="security-grid">
      <div class="security-card glass-card reveal"><h3>合约审计</h3><p>通过业内知名安全审计机构全面检测，覆盖通缩机制、资金分配、权限控制等核心模块，未发现高危漏洞。</p></div>
      <div class="security-card glass-card reveal"><h3>权限抛弃</h3><p>正式上线前已永久抛弃 Owner 权限，所有操作由智能合约自动执行，无管理后门。</p></div>
      <div class="security-card glass-card reveal"><h3>无铸币功能</h3><p>合约未设铸币功能，2.1 亿枚 GDF 代币总量永久锁定，杜绝超发风险。</p></div>
      <div class="security-card glass-card reveal"><h3>平等权利</h3><p>不具备黑名单机制，所有用户享有平等的交易与参与权利，真正去中心化。</p></div>
      <div class="security-card glass-card reveal"><h3>代码开源</h3><p>协议代码完全开源，支持社区开发者二次审查，透明可验证。</p></div>
      <div class="security-card glass-card reveal"><h3>压力测试</h3><p>多轮压力测试与边界条件模拟，极端市场环境下仍保持稳定运行。</p></div>
    </div>
  </div>
</section>

<!-- 路线图 -->
<section class="section section-alt" id="roadmap">
  <div class="container">
    <div class="section-header reveal">
      <h2 class="section-title">生态 <span class="gradient-text">路线图</span></h2>
      <p class="section-desc">从通缩价值捕获到跨场景价值流转</p>
    </div>
    <div class="roadmap-timeline">
      <div class="roadmap-item active reveal">
        <div class="roadmap-dot"></div>
        <div class="roadmap-content glass-card">
          <div class="roadmap-phase">Phase 1</div>
          <h3>协议上线</h3>
          <ul><li>五重通缩引擎部署</li><li>十层推荐奖励激活</li><li>NFT 节点发售</li><li>合约审计与权限抛弃</li></ul>
        </div>
      </div>
      <div class="roadmap-item reveal">
        <div class="roadmap-dot"></div>
        <div class="roadmap-content glass-card">
          <div class="roadmap-phase">Phase 2</div>
          <h3>DeFi 生态集成</h3>
          <ul><li>借贷平台战略协作</li><li>GDF LP 资产抵押借贷</li><li>DEX 流动性挖矿</li><li>做市商激励计划</li></ul>
        </div>
      </div>
      <div class="roadmap-item reveal">
        <div class="roadmap-dot"></div>
        <div class="roadmap-content glass-card">
          <div class="roadmap-phase">Phase 3</div>
          <h3>跨链扩展</h3>
          <ul><li>以太坊、Polygon 资产互通</li><li>跨链桥多链流通</li><li>AI 预测模型优化通缩</li><li>弹性销毁调节</li></ul>
        </div>
      </div>
      <div class="roadmap-item reveal">
        <div class="roadmap-dot"></div>
        <div class="roadmap-content glass-card">
          <div class="roadmap-phase">Phase 4</div>
          <h3>社区治理与 RWA</h3>
          <ul><li>治理代币 GDF Governance 发行</li><li>NFT 节点提案与投票权</li><li>现实世界资产链上映射</li><li>完全社区自治模式</li></ul>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- 页脚 -->
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="/logo.png" alt="GDF" class="footer-logo">
        <span class="footer-title">GDF Protocol</span>
        <p class="footer-desc">下一代 DeFi 5.0 · 五重通缩自驱动价值生态</p>
      </div>
      <div class="footer-links">
        <div class="footer-col"><h4>文档</h4><a href="/GDF_Whitepaper.pdf" target="_blank">白皮书</a><a href="#security">审计报告</a><a href="https://github.com/Mike5690/GDF-of" target="_blank">GitHub</a></div>
        <div class="footer-col"><h4>社交</h4><div class="footer-social"><a href="https://x.com/good73391245540" target="_blank" class="social-icon" title="X"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a><a href="https://t.me/gdftoken" target="_blank" class="social-icon" title="Telegram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a><a href="https://qm.qq.com/q/cY6zhTy7O8" target="_blank" class="social-icon" title="QQ"><svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M128 0C80.3 0 52 36.2 52 73.6c0 6.4.8 12.6 2.2 18.4C36.8 114.8 16 152 16 176c0 18.4 8 28 16 28 4.8 0 9.6-3.2 14.4-9.6 4 16 12 30.4 23.2 41.6-11.2 4.8-18.4 12-18.4 20 0 12 16.8 20 40.8 20 16 0 28-3.2 36-8 8 4.8 20 8 36 8 24 0 40.8-8 40.8-20 0-8-7.2-15.2-18.4-20 11.2-11.2 19.2-25.6 23.2-41.6 4.8 6.4 9.6 9.6 14.4 9.6 8 0 16-9.6 16-28 0-24-20.8-61.2-38.2-84C203.2 86.2 204 80 204 73.6 204 36.2 175.7 0 128 0z"/></svg></a></div></div>

      </div>
    </div>
    <div class="footer-bottom"><p>&copy; 2025 GDF Protocol. All rights reserved. Built on BNB Smart Chain.</p></div>
  </div>
</footer>
`;

// ========== 渲染页面 ==========
document.querySelector('#app').innerHTML = pageHTML;

// ========== 粒子背景系统 ==========
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // 创建粒子
  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
      // 使用 logo 色调
      const colors = ['0,201,255', '0,82,212', '56,249,215', '67,233,123'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.fill();
    }
  }

  // 根据屏幕大小调整粒子数量
  const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  // 绘制粒子连线
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const opacity = (1 - dist / 150) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,201,255,${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    animId = requestAnimationFrame(animate);
  }
  animate();
}

// ========== 导航栏滚动效果 ==========
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // 滚动时添加背景
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // 高亮当前 section 对应的导航链接
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentSection);
    });
  });

  // 移动端菜单切换
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
    // 点击链接时关闭菜单
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }
}

// ========== 滚动显示动画 ==========
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ========== 平滑滚动 ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavbar();
  initRevealAnimations();
  initSmoothScroll();
});

// Vite HMR 时重新初始化
if (import.meta.hot) {
  import.meta.hot.accept();
}
