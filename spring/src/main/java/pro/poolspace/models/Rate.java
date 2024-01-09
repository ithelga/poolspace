package pro.poolspace.models;
import jakarta.persistence.*;


@Entity
@Table(name = "rates")
public class Rate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long fond_id;

    private String name;

    private int pool_level;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFond_id() {
        return fond_id;
    }

    public void setFond_id(Long fond_id) {
        this.fond_id = fond_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPool_level() {
        return pool_level;
    }

    public void setPool_level(int pool_level) {
        this.pool_level = pool_level;
    }
}
