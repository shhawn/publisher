$(function () {
  const intro = $("#intro").offset().top;
  const contents01 = $("#contents1").offset().top;
  const contents02 = $("#contents2").offset().top;
  const contents03 = $("#contents3").offset().top;
  const contents04 = $("#contents4").offset().top;
  const contents05 = $("#contents5").offset().top;
  const outro = $("#outro").offset().top;
  let navOn = (id) => $(id).addClass("page_on");

  /* Navigation Click Events */
  $("#navi_01").click(function () {
    pageCurr = 0;
    $("nav li").removeClass("page_on");
    navOn("#navi_01");
    $("html").stop().animate(
      {
        scrollTop: intro,
      },
      600
    );
  });

  $("#navi_02").click(function () {
    pageCurr = 1;
    $("nav li").removeClass("page_on");
    navOn("#navi_02");
    $("html").stop().animate(
      {
        scrollTop: contents01,
      },
      600
    );
  });

  $("#navi_03").click(function () {
    pageCurr = 2;
    $("nav li").removeClass("page_on");
    navOn("#navi_03");
    $("html").stop().animate(
      {
        scrollTop: contents02,
      },
      600
    );
  });

  $("#navi_04").click(function () {
    pageCurr = 3;
    $("nav li").removeClass("page_on");
    navOn("#navi_04");
    $("html").stop().animate(
      {
        scrollTop: contents03,
      },
      600
    );
  });

  $("#navi_05").click(function () {
    pageCurr = 4;
    $("nav li").removeClass("page_on");
    navOn("#navi_05");
    $("html").stop().animate(
      {
        scrollTop: contents04,
      },
      600
    );
  });

  $("#navi_06").click(function () {
    pageCurr = 5;
    $("nav li").removeClass("page_on");
    navOn("#navi_06");
    $("html").stop().animate(
      {
        scrollTop: contents05,
      },
      600
    );
  });

  $("#navi_07").click(function () {
    pageCurr = 6;
    $("nav li").removeClass("page_on");
    navOn("#navi_07");
    $("html").stop().animate(
      {
        scrollTop: outro,
      },
      600
    );
  });

  /* Web View Moving */
  $(".page_view")
    .mouseover(function () {
      $(this).find(".reading").css({ display: "flex" });
      $(this).stop().animate(
        {
          backgroundPositionY: "100%",
        },
        7000
      );
    })
    .mouseleave(function () {
      $(this).find(".reading").hide();
      $(this).stop().animate(
        {
          backgroundPositionY: "0%",
        },
        2500
      );
    });

  /* Mobile View Moving */
  function mobileAnimate() {
    $(".mobile_cover img")
      .delay(500)
      .animate(
        {
          top: "-100%",
        },
        8000
      )
      .animate(
        {
          top: 0,
        },
        2500
      );
  }

  setInterval(mobileAnimate, 1000);

  /* Scroll Events */
  document.body.style.overflow = "hidden";
  window.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  let pageCurr = 0;

  $(window).on("wheel", function (e) {
    if ($("html").is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
      if (pageCurr == 6) return;
      pageCurr++;
      navPaging();
    } else if (e.originalEvent.deltaY < 0) {
      if (pageCurr == 0) return;
      pageCurr--;
      navPaging();
    }
    $("html")
      .stop()
      .animate(
        {
          scrollTop: window.innerHeight * pageCurr,
        },
        1500
      );
  });

  function navPaging() {
    if (pageCurr == 0) {
      $("nav").find("li").removeClass("page_on");
      $("#navi_01").addClass("page_on");
    } else if (pageCurr == 1) {
      $("nav").find("li").removeClass("page_on");
      $("#navi_02").addClass("page_on");
    } else if (pageCurr == 2) {
      $("nav").find("li").removeClass("page_on");
      $("#navi_03").addClass("page_on");
    } else if (pageCurr == 3) {
      $("nav").find("li").removeClass("page_on");
      $("#navi_04").addClass("page_on");
    } else if (pageCurr == 4) {
      $("nav").find("li").removeClass("page_on");
      $("#navi_05").addClass("page_on");
    } else if (pageCurr == 5) {
      $("nav").find("li").removeClass("page_on");
      $("#navi_06").addClass("page_on");
    } else if (pageCurr == 6) {
      $("nav").find("li").removeClass("page_on");
      $("#navi_07").addClass("page_on");
    }
  }

  window.addEventListener("beforeunload", function () {
    $("html").scrollTop(0);
  });

  /* Intro Page Effects */
  function introEffect1() {
    $(".txt_o1")
      .stop()
      .animate(
        {
          top: -55,
        },
        1300
      )
      .animate(
        {
          top: 55,
        },
        1500
      );
  }
  setTimeout(introEffect1, 200);
  setInterval(introEffect1, 3800);

  function introEffect2() {
    $(".txt_o2")
      .stop()
      .animate(
        {
          bottom: -55,
        },
        1200
      )
      .animate(
        {
          bottom: 55,
        },
        1600
      );
  }
  setTimeout(introEffect2, 300);
  setInterval(introEffect2, 3800);

  function introEffect3() {
    $(".txt_o3")
      .stop()
      .animate(
        {
          left: 0,
        },
        1200
      )
      .animate(
        {
          left: 150,
        },
        2000
      );
  }
  setTimeout(introEffect3, 100);
  setInterval(introEffect3, 3800);
});
