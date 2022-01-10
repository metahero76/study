package zz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactiveStreams01Application {

    public static void main(String[] args) {
        SpringApplication.run(ReactiveStreams01Application.class, args);

        MyPub pub = new MyPub();//신문사 생성
        MySub sub = new MySub();//구독자 생성

        pub.subscribe(sub);
    }

}
